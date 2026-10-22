export const CSS = /* css */ `
:host {
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  color-scheme: inherit;
  font-family: var(--dsw-font-family, ui-sans-serif, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif);
  --fm-ink: var(--dsw-alias-label-primary, light-dark(#241a20, #fbf6f9));
  --fm-muted: var(--dsw-alias-label-secondary, light-dark(#75616b, #c9b8c1));
  --fm-faint: var(--dsw-alias-label-tertiary, light-dark(#9a8791, #a895a0));
  --fm-line: var(--dsw-alias-border-l2, light-dark(#3a22300f, #ffffff1f));
  --fm-surface: var(--dsw-specific-menu, light-dark(#fffafdf2, #2a222bf2));
  --fm-card: var(--dsw-alias-bg-module-platform, light-dark(#ffffff, #342a33));
  --fm-accent: #e46f9c;
  --fm-accent-soft: #ffd7e6;
  --fm-gold: #d9a64b;
  --fm-cyan: #57cfe2;
  --fm-shadow: 0 16px 38px light-dark(#7d3d5a26, #00000073), 0 3px 10px light-dark(#7d3d5a12, #0000003d);
  --fm-radius: 17px;
}
* { box-sizing: border-box; }
button, input { font: inherit; }
button { cursor: pointer; }
[hidden] { display: none !important; }

.fm-root { position: fixed; inset: 0; pointer-events: none; }

/* ── pet ───────────────────────────────────────────────────────── */
.fm-pet {
  position: absolute;
  width: var(--fm-size, 250px);
  pointer-events: auto;
  user-select: none;
  -webkit-user-select: none;
  -webkit-app-region: no-drag;
  touch-action: none;
  isolation: isolate;
  cursor: grab;
}
.fm-pet[data-dragging="true"] { cursor: grabbing; }
.fm-hit { position: absolute; inset: 0; z-index: 2; }
.fm-art {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transform-origin: 50% 92%;
  animation: fm-float 5.4s ease-in-out infinite;
  will-change: transform;
}
.fm-aura {
  position: absolute;
  inset: 6% 8% 10%;
  border-radius: 50%;
  background: radial-gradient(ellipse at 50% 46%, var(--fm-glow, #ffe1ecb8), transparent 66%);
  filter: blur(10px);
  opacity: .55;
  animation: fm-aura 4.6s ease-in-out infinite;
  pointer-events: none;
}
.fm-tilt {
  position: absolute; inset: 0; z-index: 1;
  transform: translate(var(--fm-tx, 0px), var(--fm-ty, 0px)) rotate(var(--fm-rot, 0deg));
  transition: transform .26s cubic-bezier(.2, .8, .3, 1);
}
.fm-sprites { position: absolute; inset: 0; }
.fm-sprite {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity .24s ease;
  pointer-events: none;
  filter: drop-shadow(0 14px 14px #5a2a421f);
  transform-origin: 50% 92%;
}
.fm-sprite.is-active { opacity: 1; }

/* state body language */
[data-state="idle"] { --fm-glow: #ffe2eeb8; }
[data-state="working"] { --fm-glow: #a9f3ffcc; }
[data-state="working"] .fm-art { animation: fm-work 2.4s ease-in-out infinite; }
[data-state="waiting"] { --fm-glow: #ffe0a3c4; }
[data-state="waiting"] .fm-art { animation: fm-sway 2.8s ease-in-out infinite; }
[data-state="celebrate"] { --fm-glow: #ffe6a3e0; }
[data-state="celebrate"] .fm-art { animation: fm-cheer .82s cubic-bezier(.3,1.4,.5,1) 4; }
[data-state="sleeping"] { --fm-glow: #ddd1ffb8; }
[data-state="sleeping"] .fm-art { animation: fm-sleep 6.2s ease-in-out infinite; }
[data-state="pat"] { --fm-glow: #ffc5d8d8; }
[data-state="pat"] .fm-art { animation: fm-pat .72s ease-in-out 2; }
[data-state="sleeping"] .fm-sprite.is-active { transform: translateY(3%) scale(.94); }
[data-state="pat"] .fm-sprite.is-active { transform: translateY(-1%) scale(.985); }

/* ── fx overlays ──────────────────────────────────────────────── */
.fm-fx { position: absolute; inset: 0; z-index: 3; pointer-events: none; }
.fm-question, .fm-zzz, .fm-sparkles, .fm-hearts { display: none; }
[data-state="waiting"] .fm-question { display: block; animation: fm-pop 2.8s ease-in-out infinite; }
[data-state="sleeping"] .fm-zzz { display: block; }
[data-state="celebrate"] .fm-sparkles { display: block; animation: fm-twinkle 1.1s ease-in-out infinite; }
[data-state="pat"] .fm-hearts { display: block; animation: fm-twinkle 1.4s ease-in-out infinite; }
.fm-question svg { position: absolute; right: 18%; top: 15%; width: 11%; max-width: 40px; filter: drop-shadow(0 3px 6px #a2771f38); }
.fm-zzz { position: absolute; right: 6%; top: 18%; color: #9b89e0; font-weight: 800; letter-spacing: .08em; text-shadow: 0 2px 8px #ffffffcc; }
.fm-zzz b { display: block; font-size: 18px; animation: fm-drift 2.6s ease-in-out infinite; }
.fm-zzz i { display: block; font-size: 12px; font-style: normal; margin-left: 12px; opacity: .75; animation: fm-drift 2.6s .4s ease-in-out infinite; }
.fm-hearts span, .fm-sparkles span { position: absolute; display: block; }
.fm-hearts span { color: #ff7fa5; font-size: 18px; filter: drop-shadow(0 2px 4px #ffb4c94d); }
.fm-hearts span:nth-child(1) { left: 4%; top: 32%; }
.fm-hearts span:nth-child(2) { right: 2%; top: 24%; font-size: 13px; animation-delay: .25s; }
.fm-hearts span:nth-child(3) { left: 12%; top: 16%; font-size: 10px; animation-delay: .5s; }
.fm-sparkles span { width: 9px; height: 9px; background: #ffd779; clip-path: polygon(50% 0, 62% 38%, 100% 50%, 62% 62%, 50% 100%, 38% 62%, 0 50%, 38% 38%); }
.fm-sparkles span:nth-child(1) { left: 6%; top: 26%; }
.fm-sparkles span:nth-child(2) { right: 5%; top: 18%; animation-delay: .22s; }
.fm-sparkles span:nth-child(3) { right: 12%; bottom: 22%; background: #a8f4ff; animation-delay: .44s; }

/* working laptop glow */
[data-state="working"] .fm-aura { animation-duration: 1.8s; opacity: .8; }

/* ── gear / badge ─────────────────────────────────────────────── */
.fm-gear {
  position: absolute; z-index: 4; top: 12%; right: 1%;
  width: 30px; height: 30px; display: grid; place-items: center; padding: 0;
  border: 0; border-radius: 50%; color: var(--fm-ink); background: var(--fm-surface);
  box-shadow: 0 2px 6px #44202f26, inset 0 0 0 .5px var(--fm-line);
  opacity: 0; transform: translateY(3px) scale(.9);
  transition: opacity .16s, transform .16s, background .16s;
}
.fm-gear svg { width: 16px; height: 16px; }
.fm-pet:hover .fm-gear, .fm-gear:focus-visible, .fm-root[data-panel="open"] .fm-gear { opacity: 1; transform: none; }
.fm-gear:hover { background: var(--fm-card); }
.fm-gear:focus-visible { outline: 2px solid var(--fm-accent); outline-offset: 2px; }
.fm-badge {
  position: absolute; z-index: 3; left: 19%; top: 20%; min-width: 21px; height: 21px;
  padding: 0 6px; display: none; align-items: center; justify-content: center;
  border-radius: 11px; color: #7a1d3b; background: #ffd0df;
  box-shadow: 0 0 0 1.5px #ffffffd9, 0 3px 8px #8d3a5826;
  font: 700 11px/1 ui-monospace, Menlo, monospace;
}
.fm-root[data-working="true"] .fm-badge { display: inline-flex; }

/* ── bubble ───────────────────────────────────────────────────── */
.fm-bubble {
  position: absolute; z-index: 2; width: max-content; max-width: min(238px, calc(100vw - 30px));
  padding: 9px 15px 10px; border-radius: 16px 16px 16px 6px;
  color: light-dark(#4b2c3c, #fbeaf1);
  background: light-dark(#fffdfefe, #2a222cf2);
  box-shadow: 0 10px 26px light-dark(#7d3d5a26, #00000073), inset 0 0 0 .5px light-dark(#ffffffcc, #ffffff1f);
  font-size: 12.5px; line-height: 1.45; font-weight: 550; letter-spacing: .01em;
  text-align: center; text-wrap: balance; overflow-wrap: anywhere;
  pointer-events: none; opacity: 0;
  transform: translate(-50%, calc(var(--fm-ty, -100%) + 4px)) scale(.96);
  transform-origin: 50% 100%;
  transition: opacity .18s, transform .2s cubic-bezier(.2,.8,.3,1);
}
.fm-bubble::after { content: ""; position: absolute; left: 24px; bottom: -5px; width: 10px; height: 10px; background: inherit; border-radius: 2px; transform: rotate(45deg); }
.fm-bubble[data-side="below"] { border-radius: 6px 16px 16px 16px; transform-origin: 50% 0; }
.fm-bubble[data-side="below"]::after { top: -5px; bottom: auto; }
.fm-root[data-bubble="true"] .fm-bubble { opacity: 1; transform: translate(-50%, var(--fm-ty, -100%)) scale(1); }

/* ── slice view ───────────────────────────────────────────────── */
.fm-slices { position: absolute; inset: 0; opacity: 0; pointer-events: none; transition: opacity .2s; }
.fm-root[data-slice="true"] .fm-sprites { opacity: 0; }
.fm-root[data-slice="true"] .fm-slices { opacity: 1; }
.fm-root[data-slice="true"] .fm-art { animation-play-state: paused; }
.fm-root[data-slice="true"] .fm-badge { display: none; }
.fm-root[data-slice="true"] .fm-aura { opacity: .35; }
.fm-slice {
  position: absolute; left: 0; width: 100%; height: 16.6667%;
  background-repeat: no-repeat; background-size: 100% 600%;
  filter: drop-shadow(0 6px 8px #4a25371f);
  transition: transform .62s cubic-bezier(.2,.9,.22,1.02);
}
.fm-root[data-slice="true"] .fm-slice:nth-child(1) { transform: translate(-14px, -10px) rotate(-1.6deg); }
.fm-root[data-slice="true"] .fm-slice:nth-child(2) { transform: translate(13px, -6px) rotate(1.2deg); }
.fm-root[data-slice="true"] .fm-slice:nth-child(3) { transform: translate(-11px, 0) rotate(-.8deg); }
.fm-root[data-slice="true"] .fm-slice:nth-child(4) { transform: translate(12px, 2px) rotate(.9deg); }
.fm-root[data-slice="true"] .fm-slice:nth-child(5) { transform: translate(-9px, 6px) rotate(-.6deg); }
.fm-root[data-slice="true"] .fm-slice:nth-child(6) { transform: translate(10px, 10px) rotate(.7deg); }
.fm-slice-labels { position: absolute; inset: 0; z-index: 2; opacity: 0; transition: opacity .3s .16s; pointer-events: none; }
.fm-root[data-slice="true"] .fm-slice-labels { opacity: 1; }
.fm-slice-label {
  position: absolute; left: 10%; display: flex; align-items: center; gap: 5px;
  color: #a36a80; font: 600 9px/1 ui-monospace, Menlo, monospace; letter-spacing: .05em;
}
.fm-slice-label::before { content: ""; width: 14px; height: 1px; background: #e9a4ba; }
.fm-slice-label:nth-child(1) { top: 4%; }
.fm-slice-label:nth-child(2) { top: 21%; }
.fm-slice-label:nth-child(3) { top: 38%; }
.fm-slice-label:nth-child(4) { top: 55%; }
.fm-slice-label:nth-child(5) { top: 72%; }
.fm-slice-label:nth-child(6) { top: 89%; }

/* ── panel ────────────────────────────────────────────────────── */
.fm-panel {
  position: fixed; z-index: 6; width: 252px; max-width: calc(100vw - 20px);
  max-height: calc(100vh - 24px); overflow: auto; padding: 13px;
  border-radius: var(--fm-radius); color: var(--fm-ink);
  background: var(--fm-surface);
  box-shadow: var(--fm-shadow), inset 0 0 0 .5px var(--fm-line);
  backdrop-filter: blur(26px) saturate(150%);
  -webkit-backdrop-filter: blur(26px) saturate(150%);
  pointer-events: auto; opacity: 0; transform: translateY(6px) scale(.98);
  transform-origin: 80% 100%;
  transition: opacity .16s, transform .18s cubic-bezier(.2,.8,.3,1);
  font-size: 12px; line-height: 1.5; scrollbar-width: thin;
  corner-shape: var(--dsw-corner-shape, superellipse(1.5));
}
.fm-root[data-panel="open"] .fm-panel { opacity: 1; transform: none; }
.fm-panel:not([data-visible="true"]) { visibility: hidden; pointer-events: none; }
.fm-panel-head { display: flex; align-items: center; gap: 8px; margin-bottom: 2px; }
.fm-panel-head strong { font-size: 13.5px; font-weight: 650; letter-spacing: .02em; }
.fm-tag { padding: 1px 7px; border-radius: 99px; color: #963456; background: #ffd5e4; font-size: 10px; font-weight: 650; }
.fm-close { margin-left: auto; width: 26px; height: 26px; padding: 0; display: grid; place-items: center; border: 0; border-radius: 8px; color: var(--fm-muted); background: transparent; }
.fm-close:hover { color: var(--fm-ink); background: var(--fm-line); }
.fm-status { margin: 3px 0 10px; color: var(--fm-muted); font-size: 11px; line-height: 1.5; }
.fm-status b { color: var(--fm-accent); font-weight: 650; }
.fm-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 34px; }
.fm-row > label { color: var(--fm-ink); flex: 1; min-width: 0; }
.fm-value { color: var(--fm-faint); font-size: 10.5px; font-variant-numeric: tabular-nums; }
.fm-divider { height: .5px; margin: 8px 0; background: var(--fm-line); }
.fm-range { display: flex; align-items: center; gap: 8px; flex: 0 0 126px; }
.fm-range input { appearance: none; width: 100%; height: 20px; margin: 0; background: transparent; cursor: pointer; accent-color: var(--fm-accent); }
.fm-range input::-webkit-slider-runnable-track { height: 4px; border-radius: 99px; background: linear-gradient(to right, var(--fm-accent) 0 var(--fm-p, 50%), var(--fm-line) var(--fm-p, 50%) 100%); }
.fm-range input::-webkit-slider-thumb { appearance: none; width: 14px; height: 14px; margin-top: -5px; border-radius: 50%; border: 2px solid #fff; background: var(--fm-accent); box-shadow: 0 1px 3px #512; }
.fm-switch { position: relative; flex: none; width: 34px; height: 20px; padding: 0; border: 0; border-radius: 99px; background: #9c859159; transition: background .16s; }
.fm-switch::after { content: ""; position: absolute; left: 2px; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px #0003; transition: transform .18s cubic-bezier(.2,.8,.3,1); }
.fm-switch[aria-checked="true"] { background: var(--fm-accent); }
.fm-switch[aria-checked="true"]::after { transform: translateX(14px); }
.fm-switch:focus-visible { outline: 2px solid var(--fm-accent); outline-offset: 2px; }
.fm-note { margin: 2px 0 0; color: var(--fm-faint); font-size: 10px; line-height: 1.5; }
.fm-actions { display: flex; gap: 6px; margin-top: 10px; }
.fm-action { flex: 1; min-width: 0; height: 29px; padding: 0 8px; border: 0; border-radius: 9px; color: var(--fm-ink); background: var(--fm-line); font-size: 11px; font-weight: 550; white-space: nowrap; }
.fm-action:hover { background: #ffd5e45c; }
.fm-action.primary { color: #76203f; background: #ffd0e0; }
.fm-action.primary:hover { background: #ffbfd5; }
.fm-action:focus-visible, .fm-close:focus-visible { outline: 2px solid var(--fm-accent); outline-offset: 1px; }
.fm-foot { margin-top: 9px; color: var(--fm-faint); font-size: 9.5px; text-align: center; letter-spacing: .02em; }

/* ── restore ──────────────────────────────────────────────────── */
.fm-restore {
  position: fixed; z-index: 7; left: 18px; bottom: 64px; display: none; align-items: center; gap: 6px;
  height: 30px; padding: 0 11px; border: 0; border-radius: 99px; color: var(--fm-muted);
  background: var(--fm-surface); box-shadow: var(--fm-shadow), inset 0 0 0 .5px var(--fm-line);
  font-size: 11px; pointer-events: auto;
}
.fm-restore:hover { color: var(--fm-ink); }
.fm-root[data-hidden="true"] .fm-pet,
.fm-root[data-hidden="true"] .fm-bubble,
.fm-root[data-hidden="true"] .fm-panel { display: none; }
.fm-root[data-hidden="true"] .fm-restore { display: inline-flex; }

/* ── motion ───────────────────────────────────────────────────── */
.fm-root[data-motion="off"] .fm-art,
.fm-root[data-motion="off"] .fm-aura,
.fm-root[data-motion="off"] .fm-question,
.fm-root[data-motion="off"] .fm-sparkles,
.fm-root[data-motion="off"] .fm-hearts,
.fm-root[data-motion="off"] .fm-zzz b,
.fm-root[data-motion="off"] .fm-zzz i { animation: none !important; }
.fm-root[data-motion="off"] .fm-slice { transition: none; }

@keyframes fm-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
@keyframes fm-aura { 0%,100% { transform: scale(.96); opacity: .42; } 50% { transform: scale(1.04); opacity: .7; } }
@keyframes fm-work { 0%,100% { transform: translateY(0) rotate(-.35deg); } 50% { transform: translateY(-2px) rotate(.3deg); } }
@keyframes fm-sway { 0%,100% { transform: rotate(-1.1deg) translateY(0); } 50% { transform: rotate(1.1deg) translateY(-2px); } }
@keyframes fm-cheer { 0%,100% { transform: translateY(0) rotate(-2deg); } 40% { transform: translateY(-18px) rotate(3deg); } 70% { transform: translateY(-4px) rotate(-1deg); } }
@keyframes fm-sleep { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(2px) scale(1.012); } }
@keyframes fm-pat { 0%,100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-5px) scale(1.02); } }
@keyframes fm-pop { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
@keyframes fm-twinkle { 0%,100% { opacity: .45; } 50% { opacity: 1; } }
@keyframes fm-drift { 0% { opacity: .2; transform: translateY(2px); } 50% { opacity: 1; } 100% { opacity: .2; transform: translateY(-4px); } }
@media (prefers-reduced-motion: reduce) {
  .fm-art, .fm-aura, .fm-question, .fm-sparkles, .fm-hearts, .fm-zzz b, .fm-zzz i, .fm-slice { animation: none !important; transition: none !important; }
}
`;
