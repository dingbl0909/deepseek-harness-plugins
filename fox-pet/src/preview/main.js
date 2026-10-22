import { FoxPetView } from '../pet/view.js';

const params = new URLSearchParams(location.search);
const stage = document.querySelector('#stage');
const view = new FoxPetView(stage, { language: 'zh' });

view.settings.scale = Number(params.get('scale') || '1.35');
view.settings.track = params.get('track') !== '0';
view.settings.slice = params.get('slice') === '1';
view.settings.motion = params.get('motion') !== '0';
view.applySettings({ layout: true });

const state = params.get('state') || 'idle';
if (state === 'working') {
  view.updateSessions({ phase: 'ready', byId: { s1: { running: true } } }, new Map([['s1', { running: true }]]));
} else if (state === 'waiting') {
  view.updateSessions({ phase: 'ready', byId: {} }, new Map([['s1', { running: false, pendingInteraction: { id: 'ask' } }]]));
} else if (state === 'celebrate') {
  view.updateSessions({ phase: 'ready', byId: { s1: { running: true } } }, new Map([['s1', { running: true }]]));
  view.updateSessions({ phase: 'ready', byId: {} }, new Map([['s1', { running: false }]]));
} else if (state === 'sleeping') {
  view.toggleSleep();
} else if (state === 'pat') {
  view.pat();
}

if (params.get('bubble')) {
  view.say(params.get('bubble'), 60000);
}
if (params.get('panel') === '1') view.openPanel();

const width = view.pet.getBoundingClientRect().width;
const height = view.pet.getBoundingClientRect().height;
view.setPosition(
  Math.max(8, (innerWidth - width) / 2),
  Math.max(8, (innerHeight - height) / 2),
  { persist: false },
);

window.__preview = { view, params };
