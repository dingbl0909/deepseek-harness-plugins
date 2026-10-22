import { WhaleMusumeView } from './pet/view.js';

function readLanguage(ctx) {
  try {
    const value = ctx?.locale?.get?.() ?? ctx?.locale?.current ?? ctx?.locale;
    if (typeof value === 'string') return value;
    if (value && typeof value.language === 'string') return value.language;
    if (value && typeof value.locale === 'string') return value.locale;
  } catch { /* the host may not expose a locale service */ }
  try {
    return globalThis.navigator?.language || 'zh';
  } catch {
    return 'zh';
  }
}

export default function createPlugin(require) {
  const React = require('react');
  const h = React.createElement;

  function usePet(ctx, catalog, statuses) {
    const hostRef = React.useRef(null);
    const viewRef = React.useRef(null);
    const latest = React.useRef({ catalog, statuses });
    latest.current = { catalog, statuses };

    React.useEffect(() => {
      const host = hostRef.current;
      if (!host) return undefined;
      let view;
      try {
        view = new WhaleMusumeView(host, { language: readLanguage(ctx) });
        viewRef.current = view;
        view.updateSessions(latest.current.catalog, latest.current.statuses);
      } catch (error) {
        console.warn('[whale-musume] failed to mount the companion', error);
        return undefined;
      }
      return () => {
        viewRef.current = null;
        try { view.dispose(); } catch { /* teardown must never break the shell */ }
      };
    }, []);

    React.useEffect(() => {
      try { viewRef.current?.updateSessions(catalog, statuses); } catch { /* keep the pet alive */ }
    }, [catalog, statuses]);

    return hostRef;
  }

  function QuietPet() {
    const hostRef = usePet(null, undefined, undefined);
    return h('div', { ref: hostRef, 'data-whale-musume': 'quiet' });
  }

  function ConnectedPet(props) {
    const catalog = props.useSessions(snapshot => snapshot);
    const statuses = props.useSessionStatus(map => map);
    const hostRef = usePet(props.pluginCtx, catalog, statuses);
    return h('div', { ref: hostRef, 'data-whale-musume': 'connected' });
  }

  class Boundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { failed: false };
    }
    static getDerivedStateFromError() {
      return { failed: true };
    }
    componentDidCatch(error) {
      console.warn('[whale-musume] the companion was isolated after an error', error);
    }
    render() {
      return this.state.failed ? null : this.props.children;
    }
  }

  function PetRoot(props) {
    const supported =
      typeof props.useSessions === 'function' && typeof props.useSessionStatus === 'function';
    return h(
      Boundary,
      null,
      supported
        ? h(ConnectedPet, props)
        : h(QuietPet),
    );
  }

  return {
    inject: ['slots'],
    apply(ctx) {
      try {
        ctx.slots.inject('shell.overlay', () => {
          return ctx.slots.register(
            {
              name: 'shell.overlay',
              id: 'whale-musume',
              order: 80,
            },
            props => h(PetRoot, { ...props, pluginCtx: ctx }),
          );
        });
      } catch (error) {
        console.error('[whale-musume] apply failed', error);
        globalThis.__WHALE_MUSUME_APPLY_ERROR__ = error;
        throw error;
      }
    },
  };
}
