import { WhaleMusumeView } from '../pet/view.js';

const params = new URLSearchParams(location.search);
const stage = document.querySelector('#stage');
const view = new WhaleMusumeView(stage, { language: 'zh' });

const scale = Number(params.get('scale') || '1.55');
view.settings.scale = scale;
view.settings.explode = params.get('explode') === '1';
view.settings.motion = params.get('motion') !== '0';
view.settings.track = params.get('track') !== '0';
view.applySettings({ layout: true });

const state = params.get('state') || 'idle';
view.root.dataset.state = state;
view.bubble.textContent = params.get('bubble') || '';
view.root.dataset.bubble = String(Boolean(params.get('bubble')));

if (params.get('panel') === '1') view.openPanel();
if (params.get('hl')) view.root.dataset.hl = params.get('hl');

const width = view.pet.getBoundingClientRect().width;
const height = view.pet.getBoundingClientRect().height;
view.setPosition(
  Math.max(8, (innerWidth - width) / 2),
  Math.max(8, (innerHeight - height) / 2 + (params.get('down') ? 40 : 0)),
  { persist: false },
);

window.__preview = { view, params };
