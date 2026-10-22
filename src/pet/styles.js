export const CSS = /* css */ `
:host {
  all: initial;
  position: fixed;
  inset: 0;
  z-index: 40;
  pointer-events: none;
  color-scheme: inherit;
  font-family: var(--dsw-font-family, ui-sans-serif, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif);
  --wm-ink: var(--dsw-alias-label-primary, light-dark(#12172b, #f5f8ff));
  --wm-muted: var(--dsw-alias-label-secondary, light-dark(#5b6480, #b9c2d8));
  --wm-faint: var(--dsw-alias-label-tertiary, light-dark(#858ca3, #8e97ae));
  --wm-line: var(--dsw-alias-border-l2, light-dark(#1c25480f, #ffffff1f));
  --wm-surface: var(--dsw-specific-menu, light-dark(#fbfcffF2, #202538f2));
  --wm-card: var(--dsw-alias-bg-module-platform, light-dark(#ffffff, #2c3245));
  --wm-accent: #3fbcd4;
  --wm-accent-ink: #0c5060;
  --wm-gold: #f3bb4f;
  --wm-shadow: 0 10px 30px light-dark(#1a2a5a26, #00000066), 0 2px 8px light-dark(#1a2a5a14, #0000003d);
  --wm-radius: 16px;
}
* { box-sizing: border-box; }
button, input { font: inherit; }
button { cursor: pointer; }
[hidden] { display: none !important; }

.wm-root { position: fixed; inset: 0; pointer-events: none; }

/* ── the pet itself ─────────────────────────────────────────────── */
.wm-pet {
  position: absolute;
  width: var(--wm-size, 220px);
  pointer-events: auto;
  user-select: none;
  -webkit-user-select: none;
  -webkit-app-region: no-drag;
  touch-action: none;
  transform-origin: 50% 100%;
  isolation: isolate;
  cursor: grab;
}
.wm-pet[data-dragging="true"] { cursor: grabbing; }
.wm-pet::before {
  content: "";
  position: absolute;
  inset: 8% 2% 0;
  border-radius: 50% 50% 42% 42%;
  background: radial-gradient(ellipse at 50% 60%, #6fe6ff1f, transparent 68%);
  opacity: 0;
  transition: opacity .25s;
  pointer-events: none;
}
.wm-pet:hover::before, .wm-pet[data-state="working"]::before { opacity: 1; }
.wm-hit { position: absolute; inset: 0; z-index: 1; }

.wm-art {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
  pointer-events: none;
  filter: drop-shadow(0 10px 10px #1b2a5c1f);
  transform-origin: 50% 100%;
  will-change: transform;
  animation: wm-float 5.6s ease-in-out infinite;
}
.wm-ground { transform-box: view-box; transform-origin: 120px 303px; animation: wm-ground 5.6s ease-in-out infinite; }

/* independent rig pieces */
#wmBody { transform-box: fill-box; transform-origin: 50% 100%; animation: wm-breathe 4.4s ease-in-out infinite; }
#wmHairBack { transform-box: view-box; transform-origin: 120px 72px; animation: wm-hair 6.2s ease-in-out infinite; }
#wmTail { transform-box: view-box; transform-origin: 152px 262px; animation: wm-tail 3.8s ease-in-out infinite; }
#wmArmL { transform-box: view-box; transform-origin: 97px 207px; animation: wm-arm-l 5.2s ease-in-out infinite; }
#wmArmR { transform-box: view-box; transform-origin: 143px 207px; animation: wm-arm-r 5.2s ease-in-out infinite; }
.wm-finL { transform-box: view-box; transform-origin: 74px 116px; animation: wm-fin-l 5.6s ease-in-out infinite; }
.wm-finR { transform-box: view-box; transform-origin: 166px 116px; animation: wm-fin-r 5.6s ease-in-out infinite; }
.wm-clip { transform-box: fill-box; transform-origin: center; animation: wm-clip 3.4s ease-in-out infinite; }
#wmHead {
  transform-box: view-box;
  transform-origin: 120px 170px;
  transform: translate(var(--wm-hx, 0px), var(--wm-hy, 0px)) rotate(calc(var(--wm-tilt, 0deg) + var(--wm-hr, 0deg)));
  transition: transform .28s cubic-bezier(.2, .8, .3, 1);
  will-change: transform;
}
.wm-pupils {
  transform: translate(var(--wm-px, 0px), var(--wm-py, 0px));
  transition: transform .2s ease-out;
}
.wm-eye { transform-box: fill-box; transform-origin: center; animation: wm-blink 6.4s infinite; }
.wm-eye:nth-of-type(2) { animation-delay: .06s; }

.wm-eyes-closed, .wm-brows-focus { display: none; }
[data-state="working"] .wm-brows { display: none; }
[data-state="working"] .wm-brows-focus { display: block; }
.wm-mouth { display: none; }
[data-state="idle"] .wm-mouth-smile,
[data-state="pat"] .wm-mouth-grin,
[data-state="celebrate"] .wm-mouth-grin,
[data-state="sleeping"] .wm-mouth-sleep,
[data-state="waiting"] .wm-mouth-o,
[data-state="working"] .wm-mouth-flat { display: block; }
[data-state="sleeping"] .wm-eyes-open,
[data-state="pat"] .wm-eyes-open,
[data-state="celebrate"] .wm-eyes-open { display: none; }
[data-state="sleeping"] .wm-eyes-closed,
[data-state="pat"] .wm-eyes-closed,
[data-state="celebrate"] .wm-eyes-closed { display: block; }

/* state body language */
[data-state="working"] .wm-art { animation: wm-work 2.6s ease-in-out infinite; }
[data-state="working"] #wmHead { --wm-tilt: -2deg; }
[data-state="working"] #wmArmL { animation: wm-type-l .42s ease-in-out infinite; }
[data-state="working"] #wmArmR { animation: wm-type-r .42s ease-in-out infinite; }

[data-state="waiting"] .wm-art { animation: wm-wait 2.8s ease-in-out infinite; }
[data-state="waiting"] #wmHead { --wm-tilt: -7deg; }
[data-state="waiting"] #wmArmR { animation: wm-raise 2.8s ease-in-out infinite; }

[data-state="sleeping"] .wm-art { animation: wm-sleep 6.4s ease-in-out infinite; }
[data-state="sleeping"] #wmHead { --wm-tilt: 5deg; --wm-hy: 3px; }
[data-state="sleeping"] #wmBody { animation-duration: 6.4s; }
[data-state="sleeping"] #wmTail { animation-duration: 8s; }

[data-state="pat"] .wm-art { animation: wm-pat .7s ease-in-out 2; }
[data-state="pat"] #wmHead { --wm-tilt: 4deg; }

[data-state="celebrate"] .wm-art { animation: wm-cheer .8s cubic-bezier(.3, 1.5, .5, 1) 3; }
[data-state="celebrate"] #wmHead { --wm-tilt: -5deg; }
[data-state="celebrate"] #wmArmL { animation: wm-cheer-l .8s ease-in-out 3; }
[data-state="celebrate"] #wmArmR { animation: wm-cheer-r .8s ease-in-out 3; }

[data-state="celebrate"] .wm-sparkles,
[data-state="pat"] .wm-hearts { display: block; }
[data-state="waiting"] .wm-question,
[data-state="sleeping"] .wm-zzz { display: block; }
.wm-question, .wm-zzz, .wm-hearts, .wm-sparkles { display: none; }
.wm-sparkles, .wm-hearts { animation: wm-fade 1.6s ease-in-out infinite; }
.wm-question { animation: wm-pop 2.8s ease-in-out infinite; }
.wm-zzz-text { font: 700 11px/1 ui-rounded, "PingFang SC", sans-serif; fill: #9fc6ff; }
.wm-zzz-2 { font-size: 9px; animation: wm-zzz 2.4s ease-in-out infinite; }
.wm-zzz-3 { font-size: 7px; animation: wm-zzz 2.4s .4s ease-in-out infinite; }
.wm-bubbles g { transform-box: view-box; }

/* buttons inside the pet */
.wm-gear {
  position: absolute;
  z-index: 3;
  top: 13%;
  right: 3%;
  width: 29px;
  height: 29px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  color: var(--wm-ink);
  background: var(--wm-surface);
  box-shadow: 0 1px 3px #0b143326, inset 0 0 0 .5px var(--wm-line);
  opacity: 0;
  transform: translateY(3px) scale(.9);
  transition: opacity .16s, transform .16s, background .16s;
}
.wm-gear svg { width: 16px; height: 16px; }
.wm-pet:hover .wm-gear, .wm-gear:focus-visible, .wm-root[data-panel="open"] .wm-gear { opacity: 1; transform: none; }
.wm-gear:hover { background: var(--wm-card); }
.wm-gear:focus-visible { outline: 2px solid var(--wm-accent); outline-offset: 2px; }

.wm-badge {
  position: absolute;
  z-index: 2;
  left: 1%;
  top: 7%;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: #063844;
  background: #8cecf8;
  box-shadow: 0 0 0 1.5px #ffffffcc, 0 2px 5px #164e6a33;
  font: 700 11px/1 ui-monospace, Menlo, monospace;
}
.wm-root[data-working="true"] .wm-badge { display: inline-flex; }

/* ── speech bubble ─────────────────────────────────────────────── */
.wm-bubble {
  position: absolute;
  z-index: 2;
  width: max-content;
  max-width: min(236px, calc(100vw - 30px));
  padding: 9px 14px 10px;
  border-radius: 15px 16px 15px 6px;
  color: light-dark(#203050, #e9f1ff);
  background: light-dark(#ffffffF2, #232c49f2);
  box-shadow: 0 8px 22px light-dark(#1b2a5c26, #00000066), inset 0 0 0 .5px light-dark(#ffffff99, #ffffff1f);
  font-size: 12.5px;
  line-height: 1.45;
  font-weight: 550;
  letter-spacing: .01em;
  text-align: center;
  text-wrap: balance;
  overflow-wrap: anywhere;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, calc(var(--wm-ty, -100%) + 4px)) scale(.96);
  transform-origin: 50% 100%;
  transition: opacity .18s, transform .2s cubic-bezier(.2, .8, .3, 1);
}
.wm-bubble::after {
  content: "";
  position: absolute;
  left: 22px;
  bottom: -5px;
  width: 10px;
  height: 10px;
  background: inherit;
  border-radius: 2px;
  transform: rotate(45deg);
  box-shadow: 2px 2px 4px #1b2a5c12;
}
.wm-bubble[data-side="below"] { border-radius: 6px 15px 16px 15px; transform-origin: 50% 0; }
.wm-bubble[data-side="below"]::after { top: -5px; bottom: auto; }
.wm-root[data-bubble="true"] .wm-bubble { opacity: 1; transform: translate(-50%, var(--wm-ty, -100%)) scale(1); }
.wm-bubble .wm-bubble-hint { display: block; margin-top: 2px; color: var(--wm-muted); font-size: 10.5px; font-weight: 500; }

/* ── settings panel ────────────────────────────────────────────── */
.wm-panel {
  position: fixed;
  z-index: 5;
  width: 252px;
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 24px);
  overflow: auto;
  padding: 13px;
  border-radius: var(--wm-radius);
  corner-shape: var(--dsw-corner-shape, superellipse(1.5));
  color: var(--wm-ink);
  background: var(--wm-surface);
  box-shadow: var(--wm-shadow), inset 0 0 0 .5px var(--wm-line);
  backdrop-filter: blur(26px) saturate(150%);
  -webkit-backdrop-filter: blur(26px) saturate(150%);
  pointer-events: auto;
  opacity: 0;
  transform: translateY(6px) scale(.98);
  transform-origin: 80% 100%;
  transition: opacity .16s, transform .18s cubic-bezier(.2, .8, .3, 1);
  font-size: 12px;
  line-height: 1.5;
  scrollbar-width: thin;
}
.wm-root[data-panel="open"] .wm-panel { opacity: 1; transform: none; }
.wm-panel:not([data-visible="true"]) { visibility: hidden; pointer-events: none; }
.wm-panel-head { display: flex; align-items: center; gap: 8px; margin-bottom: 2px; }
.wm-panel-head strong { font-size: 13.5px; font-weight: 650; letter-spacing: .02em; }
.wm-tag { padding: 1px 7px; border-radius: 99px; color: var(--wm-accent-ink); background: #79e6f24d; font-size: 10px; font-weight: 600; }
.wm-close {
  margin-left: auto; width: 26px; height: 26px; padding: 0; display: grid; place-items: center;
  border: 0; border-radius: 8px; color: var(--wm-muted); background: transparent;
}
.wm-close:hover { color: var(--wm-ink); background: var(--wm-line); }
.wm-status { margin: 3px 0 10px; color: var(--wm-muted); font-size: 11px; line-height: 1.5; }
.wm-status b { color: var(--wm-accent); font-weight: 650; }

.wm-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; min-height: 34px; }
.wm-row > label { color: var(--wm-ink); flex: 1; min-width: 0; }
.wm-value { color: var(--wm-faint); font-size: 10.5px; font-variant-numeric: tabular-nums; }
.wm-divider { height: .5px; margin: 8px 0; background: var(--wm-line); }

.wm-range { display: flex; align-items: center; gap: 8px; flex: 0 0 126px; }
.wm-range input {
  appearance: none; width: 100%; height: 20px; margin: 0; background: transparent; cursor: pointer; accent-color: var(--wm-accent);
}
.wm-range input::-webkit-slider-runnable-track {
  height: 4px; border-radius: 99px;
  background: linear-gradient(to right, var(--wm-accent) 0 var(--wm-p, 50%), var(--wm-line) var(--wm-p, 50%) 100%);
}
.wm-range input::-webkit-slider-thumb {
  appearance: none; width: 14px; height: 14px; margin-top: -5px; border-radius: 50%;
  border: 2px solid #fff; background: var(--wm-accent); box-shadow: 0 1px 3px #123;
}

.wm-switch { position: relative; flex: none; width: 34px; height: 20px; padding: 0; border: 0; border-radius: 99px; background: #8b95ad59; transition: background .16s; }
.wm-switch::after { content: ""; position: absolute; left: 2px; top: 2px; width: 16px; height: 16px; border-radius: 50%; background: #fff; box-shadow: 0 1px 2px #0003; transition: transform .18s cubic-bezier(.2, .8, .3, 1); }
.wm-switch[aria-checked="true"] { background: var(--wm-accent); }
.wm-switch[aria-checked="true"]::after { transform: translateX(14px); }
.wm-switch:focus-visible { outline: 2px solid var(--wm-accent); outline-offset: 2px; }

.wm-layers { display: flex; flex-wrap: wrap; gap: 5px; margin-top: 2px; }
.wm-chip {
  display: inline-flex; align-items: center; gap: 4px; height: 24px; padding: 0 8px;
  border: 0; border-radius: 8px; color: var(--wm-muted); background: var(--wm-line);
  font-size: 10.5px; font-weight: 550;
}
.wm-chip::before { content: ""; width: 6px; height: 6px; border-radius: 2px; background: var(--chip, var(--wm-accent)); }
.wm-chip:hover, .wm-chip[aria-pressed="true"] { color: var(--wm-ink); background: #78e5f23d; }

.wm-actions { display: flex; gap: 6px; margin-top: 10px; }
.wm-action {
  flex: 1; min-width: 0; height: 29px; padding: 0 8px; border: 0; border-radius: 8px;
  color: var(--wm-ink); background: var(--wm-line); font-size: 11px; font-weight: 550;
  white-space: nowrap;
}
.wm-action:hover { background: #78e5f238; }
.wm-action.primary { color: #063844; background: #8cecf8; }
.wm-action.primary:hover { background: #a5f4fd; }
.wm-action:focus-visible, .wm-chip:focus-visible, .wm-close:focus-visible { outline: 2px solid var(--wm-accent); outline-offset: 1px; }

.wm-foot { margin-top: 9px; color: var(--wm-faint); font-size: 9.5px; text-align: center; letter-spacing: .02em; }

/* ── restore chip ──────────────────────────────────────────────── */
.wm-restore {
  position: fixed; z-index: 6; left: 18px; bottom: 64px;
  display: none; align-items: center; gap: 6px;
  height: 30px; padding: 0 11px; border: 0; border-radius: 99px;
  color: var(--wm-muted); background: var(--wm-surface);
  box-shadow: var(--wm-shadow), inset 0 0 0 .5px var(--wm-line);
  font-size: 11px; pointer-events: auto;
}
.wm-restore:hover { color: var(--wm-ink); }
.wm-root[data-hidden="true"] .wm-pet,
.wm-root[data-hidden="true"] .wm-bubble,
.wm-root[data-hidden="true"] .wm-panel { display: none; }
.wm-root[data-hidden="true"] .wm-restore { display: inline-flex; }

/* ── slice / exploded view ─────────────────────────────────────── */
.wm-layer { transition: transform .62s cubic-bezier(.2, .9, .22, 1.02); }
.wm-root[data-explode="true"] .wm-layer-hair { transform: translate(-17px, -4px) rotate(-2.4deg); }
.wm-root[data-explode="true"] .wm-layer-tail { transform: translate(20px, -8px) rotate(4deg); }
.wm-root[data-explode="true"] .wm-layer-head { transform: translate(0, -30px); }
.wm-root[data-explode="true"] .wm-layer-body { transform: translate(0, 12px); }
.wm-root[data-explode="true"] .wm-layer-armL { transform: translate(-19px, 7px) rotate(-5deg); }
.wm-root[data-explode="true"] .wm-layer-armR { transform: translate(19px, 7px) rotate(5deg); }
.wm-root[data-explode="true"] .wm-layer-fx { transform: translate(6px, -14px); }
.wm-root[data-explode="true"] .wm-labels { opacity: 1; }
.wm-root[data-explode="true"] .wm-art { animation-play-state: paused; }
.wm-root[data-explode="true"] .wm-neck { opacity: 0; }

.wm-labels { opacity: 0; transition: opacity .3s .18s; pointer-events: none; }
.wm-label rect { fill: light-dark(#ffffffF2, #1b2340f2); stroke: #3fbcd44d; stroke-width: .7; }
.wm-label text { fill: light-dark(#39465f, #cfdcff); font: 600 7.4px/1 ui-sans-serif, "PingFang SC", sans-serif; text-anchor: middle; letter-spacing: .04em; }
.wm-label path { stroke: #3fbcd48c; stroke-width: .8; stroke-dasharray: 2 2; fill: none; }

.wm-root[data-hl="hair"] .wm-layer-hair,
.wm-root[data-hl="head"] .wm-layer-head,
.wm-root[data-hl="body"] .wm-layer-body,
.wm-root[data-hl="arms"] .wm-layer-armL,
.wm-root[data-hl="arms"] .wm-layer-armR,
.wm-root[data-hl="tail"] .wm-layer-tail { filter: drop-shadow(0 0 7px #ffd15fcc); }

/* ── motion switches ───────────────────────────────────────────── */
.wm-root[data-motion="off"] .wm-art,
.wm-root[data-motion="off"] .wm-layer,
.wm-root[data-motion="off"] #wmBody,
.wm-root[data-motion="off"] #wmHairBack,
.wm-root[data-motion="off"] #wmTail,
.wm-root[data-motion="off"] #wmArmL,
.wm-root[data-motion="off"] #wmArmR,
.wm-root[data-motion="off"] .wm-finL,
.wm-root[data-motion="off"] .wm-finR,
.wm-root[data-motion="off"] .wm-eye,
.wm-root[data-motion="off"] .wm-clip,
.wm-root[data-motion="off"] .wm-question,
.wm-root[data-motion="off"] .wm-sparkles,
.wm-root[data-motion="off"] .wm-hearts,
.wm-root[data-motion="off"] .wm-zzz-text { animation: none !important; }

@keyframes wm-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
@keyframes wm-ground { 0%, 100% { transform: scaleX(1); opacity: .16; } 50% { transform: scaleX(.92); opacity: .11; } }
@keyframes wm-breathe { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.018) translateY(-1px); } }
@keyframes wm-hair { 0%, 100% { transform: rotate(-.7deg); } 50% { transform: rotate(1.1deg); } }
@keyframes wm-tail { 0%, 100% { transform: rotate(-1.6deg); } 50% { transform: rotate(2.4deg); } }
@keyframes wm-arm-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-1.6deg); } }
@keyframes wm-arm-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(1.4deg); } }
@keyframes wm-fin-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-2.6deg); } }
@keyframes wm-fin-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(2.6deg); } }
@keyframes wm-clip { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(5deg); } }
@keyframes wm-blink { 0%, 92.4%, 96.4%, 100% { transform: scaleY(1); } 94.2%, 95% { transform: scaleY(.06); } }
@keyframes wm-work { 0%, 100% { transform: translateY(0) rotate(-.3deg); } 50% { transform: translateY(-2px) rotate(.25deg); } }
@keyframes wm-type-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-7deg); } }
@keyframes wm-type-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(7deg); } }
@keyframes wm-wait { 0%, 100% { transform: translateY(0) rotate(-.6deg); } 50% { transform: translateY(-2px) rotate(.4deg); } }
@keyframes wm-raise { 0%, 100% { transform: rotate(-58deg); } 50% { transform: rotate(-72deg); } }
@keyframes wm-sleep { 0%, 100% { transform: translateY(0) scaleY(1); } 50% { transform: translateY(1px) scaleY(.995); } }
@keyframes wm-pat { 0%, 100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-5px) scale(1.02); } }
@keyframes wm-cheer { 0%, 100% { transform: translateY(0) rotate(-2deg); } 40% { transform: translateY(-18px) rotate(3deg); } 70% { transform: translateY(-4px) rotate(-1deg); } }
@keyframes wm-cheer-l { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(36deg); } }
@keyframes wm-cheer-r { 0%, 100% { transform: rotate(0); } 50% { transform: rotate(-36deg); } }
@keyframes wm-fade { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
@keyframes wm-pop { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
@keyframes wm-zzz { 0% { opacity: .15; transform: translateY(2px); } 50% { opacity: 1; } 100% { opacity: .15; transform: translateY(-3px); } }

@media (prefers-reduced-motion: reduce) {
  .wm-art, .wm-layer, #wmBody, #wmHairBack, #wmTail, #wmArmL, #wmArmR, .wm-finL, .wm-finR, .wm-eye,
  .wm-clip, .wm-question, .wm-sparkles, .wm-hearts, .wm-zzz-text { animation: none !important; }
}
`;
