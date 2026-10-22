import { SPRITES, STATES } from './sprites.js';
import { CSS } from './styles.js';
import { summarizeSessions } from './session.js';

const STORAGE_KEY = 'dsh.fox-pet.v1';
const BASE_SIZE = 300;
const DEFAULTS = Object.freeze({
  x: null,
  y: null,
  scale: 1,
  track: true,
  slice: false,
  motion: true,
  hidden: false,
});

const LINES = {
  hello: ['我是小铃。', '今天也一起加油吧～', '我在这儿陪你。'],
  idle: ['我在哦。', '写累了就摸摸我吧。', '摸鱼五分钟也没关系～', '今天也辛苦啦。'],
  working: ['陪你一起专注中…', '我在帮你盯着哦。', '一起把这件事做完吧！'],
  waiting: ['这里需要你看一下～', '有个选择在等你哦。', '我帮你举着小牌子。'],
  celebrate: ['完成啦！辛苦辛苦～', '好耶，收工！', '这一回合漂亮！'],
  sleeping: ['Zzz… 有事叫我。'],
  pat: ['嘿嘿…再摸一下也可以。', '呜…好痒。', '今天也最喜欢你了。'],
};

const SLICE_LABELS = ['01', '02', '03', '04', '05', '06'];

function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }

function readSettings() {
  try {
    const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed = JSON.parse(raw);
    return { ...DEFAULTS, ...Object.fromEntries(Object.entries(parsed || {}).filter(([k]) => k in DEFAULTS)) };
  } catch { return { ...DEFAULTS }; }
}

function pick(list, last) {
  if (!list.length) return '';
  let next = list[Math.floor(Math.random() * list.length)];
  if (list.length > 1 && next === last) next = list[(list.indexOf(next) + 1) % list.length];
  return next;
}

export class FoxPetView {
  constructor(host, options = {}) {
    if (!host) throw new Error('FoxPetView needs a host element');
    this.host = host;
    this.doc = host.ownerDocument;
    this.win = this.doc.defaultView || globalThis;
    this.lang = options.language?.startsWith?.('en') ? 'en' : 'zh';
    this.settings = readSettings();
    this.session = { running: 0, waiting: 0 };
    this.sessionState = 'idle';
    this.reaction = null;
    this.sleeping = false;
    this.lastLine = '';
    this.bubbleText = '';
    this.bubbleTimer = 0;
    this.reactionTimer = 0;
    this.pointer = { x: 0, y: 0 };
    this.drag = null;
    this.frame = 0;
    this.disposed = false;

    this.shadow = host.shadowRoot || host.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `<style>${CSS}</style>${this.template()}`;
    this.root = this.shadow.querySelector('.fm-root');
    this.pet = this.shadow.querySelector('.fm-pet');
    this.art = this.shadow.querySelector('.fm-art');
    this.tilt = this.shadow.querySelector('.fm-tilt');
    this.bubble = this.shadow.querySelector('.fm-bubble');
    this.panel = this.shadow.querySelector('.fm-panel');
    this.gear = this.shadow.querySelector('.fm-gear');
    this.badge = this.shadow.querySelector('.fm-badge');
    this.sprites = [...this.shadow.querySelectorAll('.fm-sprite')];
    this.slices = [...this.shadow.querySelectorAll('.fm-slice')];
    host.__foxPet = this;

    this.bind();
    this.applySettings({ layout: true });
    this.render();
    this.resizeObserver = new this.win.ResizeObserver(() => this.layout());
    this.resizeObserver.observe(this.doc.documentElement);
    this.win.addEventListener('resize', this.onResize);
    this.win.addEventListener('pointermove', this.onPointerMove, { passive: true });
    this.doc.addEventListener('pointerdown', this.onDocPointerDown, true);
    this.doc.addEventListener('keydown', this.onKeyDown, true);
    this.frame = this.win.requestAnimationFrame(() => this.layout());
    this.win.setTimeout(() => {
      if (this.sessionState === 'idle' && !this.reaction && !this.bubbleText && this.root.dataset.panel !== 'open') this.say(pick(LINES.hello, this.lastLine), 4200);
    }, 900);
  }

  template() {
    const imgs = STATES.map((key) =>
      `<img class="fm-sprite" data-key="${key}" src="${SPRITES[key]}" alt="" draggable="false">`).join('');
    const slices = STATES.length
      ? SLICE_LABELS.map((n, i) =>
        `<div class="fm-slice" data-i="${i}" style="top:${(i * 100) / 6}%"></div>`).join('')
      : '';
    const labels = SLICE_LABELS.map((n) => `<span class="fm-slice-label">${n}</span>`).join('');
    return `
      <div class="fm-root" data-state="idle" data-panel="closed" data-hidden="false" data-slice="false" data-motion="on">
        <div class="fm-pet" tabindex="0" role="button" aria-label="狐娘小铃，拖拽移动，点击摸摸头">
          <div class="fm-hit"></div>
          <div class="fm-art">
            <div class="fm-aura"></div>
            <div class="fm-tilt">
              <div class="fm-sprites">${imgs}</div>
              <div class="fm-slices">${slices}</div>
              <div class="fm-slice-labels">${labels}</div>
              <div class="fm-fx">
                <div class="fm-question">
                  <svg viewBox="0 0 40 44" fill="none" aria-hidden="true">
                    <path d="M10 13C10 5 20 2 26 6C33 11 32 20 25 23C21 25 20 27 20 31" stroke="#e4a63c" stroke-width="6" stroke-linecap="round"/>
                    <circle cx="20" cy="40" r="3.4" fill="#e4a63c"/>
                  </svg>
                </div>
                <div class="fm-zzz"><b>Z</b><i>z z</i></div>
                <div class="fm-hearts"><span>♥</span><span>♥</span><span>♥</span></div>
                <div class="fm-sparkles"><span></span><span></span><span></span></div>
              </div>
            </div>
          </div>
          <div class="fm-badge" aria-hidden="true">0</div>
          <button class="fm-gear" type="button" title="小铃的设置" aria-label="打开小铃的设置" aria-expanded="false">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              <circle cx="6.2" cy="4.5" r="1.7" fill="var(--fm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
              <circle cx="10" cy="8" r="1.7" fill="var(--fm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
              <circle cx="5" cy="11.5" r="1.7" fill="var(--fm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
            </svg>
          </button>
        </div>

        <div class="fm-bubble" role="status" aria-live="polite"></div>

        <div class="fm-panel" role="dialog" aria-label="小铃的设置">
          <div class="fm-panel-head">
            <strong>小铃</strong><span class="fm-tag">狐娘</span>
            <button class="fm-close" type="button" aria-label="关闭设置">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </div>
          <p class="fm-status"></p>
          <div class="fm-row">
            <label for="fm-size">大小</label>
            <span class="fm-value fm-size-value">100%</span>
            <div class="fm-range"><input id="fm-size" class="fm-size" type="range" min="70" max="150" step="5" value="100" aria-label="桌宠大小"></div>
          </div>
          <div class="fm-divider"></div>
          <div class="fm-row">
            <label id="fm-track-label">视线跟随</label>
            <button class="fm-switch fm-track" type="button" role="switch" aria-checked="true" aria-labelledby="fm-track-label"></button>
          </div>
          <div class="fm-row">
            <label id="fm-slice-label">切片视图</label>
            <button class="fm-switch fm-slice-switch" type="button" role="switch" aria-checked="false" aria-labelledby="fm-slice-label"></button>
          </div>
          <div class="fm-row">
            <label id="fm-motion-label">动态效果</label>
            <button class="fm-switch fm-motion" type="button" role="switch" aria-checked="true" aria-labelledby="fm-motion-label"></button>
          </div>
          <p class="fm-note">切片视图会把当前立绘横向切成 6 条再展开，是“分割”的彩蛋，不是真正的 Live2D 分层。</p>
          <div class="fm-actions">
            <button class="fm-action primary fm-pat" type="button">摸摸头</button>
            <button class="fm-action fm-sleep" type="button">睡觉</button>
            <button class="fm-action fm-hide" type="button">隐藏</button>
          </div>
          <p class="fm-foot">拖拽移动 · 右键打开设置 · 双击睡觉</p>
        </div>

        <button class="fm-restore" type="button" aria-label="找回小铃">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 9c3.2.4 5.2-1.7 6-4 1.1 3.2 3.4 4.1 6 3.4-1 2.5-3.4 4.1-6.1 4.1S2.8 11.4 2 9Z" fill="#e46f9c"/>
            <path d="M8 1.8c1.2 1 1.9 2.2 2.2 3.4C9.2 5.8 8.4 5 8 4.2 7.6 5 6.8 5.8 5.8 6.2 6.1 5 6.8 3.8 8 1.8Z" fill="#ffd0e0"/>
          </svg>
          找回小铃
        </button>
      </div>`;
  }

  bind() {
    this.onResize = () => { this.clampPosition(); this.layout(); };
    this.onDocPointerDown = (event) => {
      if (this.root.dataset.panel !== 'open') return;
      const path = event.composedPath?.() || [];
      if (path.includes(this.panel) || path.includes(this.gear)) return;
      this.closePanel();
    };
    this.onKeyDown = (event) => {
      if (event.key === 'Escape' && this.root.dataset.panel === 'open') this.closePanel();
    };
    this.onPointerMove = (event) => {
      if (!this.settings.track || this.settings.slice) return;
      const rect = this.pet.getBoundingClientRect();
      if (!rect.width) return;
      const dx = clamp((event.clientX - (rect.left + rect.width / 2)) / Math.max(220, this.win.innerWidth * 0.5), -1, 1);
      const dy = clamp((event.clientY - (rect.top + rect.height * 0.46)) / Math.max(180, this.win.innerHeight * 0.55), -1, 1);
      if (this.frame) return;
      this.frame = this.win.requestAnimationFrame(() => {
        this.frame = 0;
        if (this.disposed) return;
        this.pointer = { x: dx, y: dy };
        this.tilt.style.setProperty('--fm-tx', `${(dx * 3.2).toFixed(2)}px`);
        this.tilt.style.setProperty('--fm-ty', `${(dy * 2.4).toFixed(2)}px`);
        this.tilt.style.setProperty('--fm-rot', `${(dx * 1.1).toFixed(2)}deg`);
      });
    };

    this.pet.addEventListener('pointerdown', this.onPetDown.bind(this));
    this.pet.addEventListener('pointermove', this.onPetMove.bind(this));
    this.pet.addEventListener('pointerup', this.onPetUp.bind(this));
    this.pet.addEventListener('pointercancel', this.onPetUp.bind(this));
    this.pet.addEventListener('contextmenu', (event) => { event.preventDefault(); this.togglePanel(); });
    this.pet.addEventListener('pointerenter', () => {
      if (this.root.dataset.bubble !== 'true' && this.bubbleText) this.showBubble(true);
    });
    this.pet.addEventListener('pointerleave', () => {
      if (this.root.dataset.bubble === 'true' && this.reaction !== 'pat') this.showBubble(false);
    });
    this.pet.addEventListener('dblclick', (event) => { event.preventDefault(); this.toggleSleep(); });
    this.pet.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); this.pat(); }
    });

    this.gear.addEventListener('click', (event) => { event.stopPropagation(); this.togglePanel(); });
    this.shadow.querySelector('.fm-close').addEventListener('click', () => this.closePanel());
    this.shadow.querySelector('.fm-restore').addEventListener('click', () => {
      this.settings.hidden = false;
      this.applySettings({ layout: true });
      this.save();
      this.say('我回来啦。', 2600);
    });

    this.sizeInput = this.shadow.querySelector('.fm-size');
    this.sizeInput.addEventListener('input', () => {
      this.settings.scale = Number(this.sizeInput.value) / 100;
      this.applySettings({ layout: true });
      this.save();
    });

    this.trackSwitch = this.shadow.querySelector('.fm-track');
    this.trackSwitch.addEventListener('click', () => {
      this.settings.track = !this.settings.track;
      this.applySettings();
      this.save();
    });
    this.sliceSwitch = this.shadow.querySelector('.fm-slice-switch');
    this.sliceSwitch.addEventListener('click', () => {
      this.settings.slice = !this.settings.slice;
      this.applySettings();
      this.save();
    });
    this.motionSwitch = this.shadow.querySelector('.fm-motion');
    this.motionSwitch.addEventListener('click', () => {
      this.settings.motion = !this.settings.motion;
      this.applySettings();
      this.save();
    });

    this.shadow.querySelector('.fm-pat').addEventListener('click', () => this.pat());
    this.shadow.querySelector('.fm-sleep').addEventListener('click', () => this.toggleSleep());
    this.shadow.querySelector('.fm-hide').addEventListener('click', () => {
      this.settings.hidden = true;
      this.closePanel();
      this.applySettings();
      this.save();
    });
  }

  onPetDown(event) {
    if (event.button !== 0) return;
    if (event.target.closest?.('.fm-gear')) return;
    const rect = this.pet.getBoundingClientRect();
    this.drag = { pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top, moved: false, at: Date.now() };
    try { this.pet.setPointerCapture?.(event.pointerId); } catch { /* synthetic pointer */ }
  }

  onPetMove(event) {
    if (!this.drag || event.pointerId !== this.drag.pointerId) return;
    const dx = event.clientX - this.drag.startX;
    const dy = event.clientY - this.drag.startY;
    if (!this.drag.moved && Math.hypot(dx, dy) < 4) return;
    this.drag.moved = true;
    this.pet.dataset.dragging = 'true';
    this.showBubble(false);
    const rect = this.pet.getBoundingClientRect();
    const left = clamp(this.drag.left + dx, 4, Math.max(4, this.win.innerWidth - rect.width - 4));
    const top = clamp(this.drag.top + dy, 4, Math.max(4, this.win.innerHeight - rect.height - 4));
    this.setPosition(left, top, { persist: false });
  }

  onPetUp(event) {
    if (!this.drag || event.pointerId !== this.drag.pointerId) return;
    const drag = this.drag;
    this.drag = null;
    this.pet.dataset.dragging = 'false';
    try { this.pet.releasePointerCapture?.(event.pointerId); } catch { /* already released */ }
    if (drag.moved) { this.layout(); this.save(); return; }
    if (Date.now() - drag.at < 700) this.pat();
  }

  applySettings({ layout = false } = {}) {
    const { scale, track, slice, motion, hidden } = this.settings;
    const px = Math.round(BASE_SIZE * scale);
    this.root.style.setProperty('--fm-size', `${px}px`);
    this.root.dataset.motion = motion ? 'on' : 'off';
    this.root.dataset.slice = String(Boolean(slice));
    this.root.dataset.hidden = String(Boolean(hidden));
    this.trackSwitch?.setAttribute('aria-checked', String(Boolean(track)));
    this.sliceSwitch?.setAttribute('aria-checked', String(Boolean(slice)));
    this.motionSwitch?.setAttribute('aria-checked', String(Boolean(motion)));
    if (this.sizeInput) {
      this.sizeInput.value = String(Math.round(scale * 100));
      this.sizeInput.style.setProperty('--fm-p', `${((scale * 100 - 70) / 80) * 100}%`);
    }
    const value = this.shadow.querySelector('.fm-size-value');
    if (value) value.textContent = `${Math.round(scale * 100)}%`;
    if (!track) {
      for (const name of ['--fm-tx', '--fm-ty', '--fm-rot']) this.tilt.style.removeProperty(name);
    }
    if (layout) this.layout();
    this.render();
  }

  layout() {
    if (this.disposed) return;
    const rect = this.pet.getBoundingClientRect();
    const declared = Number.parseFloat(this.root.style.getPropertyValue('--fm-size')) || BASE_SIZE;
    const width = rect.width || declared;
    const height = rect.height || width;
    const vw = this.win.innerWidth;
    const vh = this.win.innerHeight;
    const restored = this.settings.x == null || this.settings.y == null;
    let left = restored ? 22 : this.settings.x;
    let top = restored ? vh - height - 62 : this.settings.y;
    left = clamp(left, 4, Math.max(4, vw - width - 4));
    top = clamp(top, 4, Math.max(4, vh - height - 4));
    this.setPosition(left, top, { persist: false });
    this.positionPanel(left, top, width);
    this.positionBubble(left, top, width, height);
  }

  setPosition(left, top, { persist = true } = {}) {
    this.settings.x = Math.round(left);
    this.settings.y = Math.round(top);
    this.pet.style.left = `${this.settings.x}px`;
    this.pet.style.top = `${this.settings.y}px`;
    if (persist) this.save();
    const rect = this.pet.getBoundingClientRect();
    this.positionBubble(left, top, rect.width, rect.height);
    if (this.root.dataset.panel === 'open') this.positionPanel(left, top, rect.width);
  }

  clampPosition() {
    if (this.settings.x == null) return;
    const rect = this.pet.getBoundingClientRect();
    this.settings.x = clamp(this.settings.x, 4, Math.max(4, this.win.innerWidth - rect.width - 4));
    this.settings.y = clamp(this.settings.y, 4, Math.max(4, this.win.innerHeight - rect.height - 4));
  }

  positionBubble(left, top, width, height) {
    const vw = this.win.innerWidth;
    const half = Math.min(Math.max(this.bubble.offsetWidth || 220, 120) / 2, (vw - 16) / 2);
    const center = clamp(left + width / 2, half + 8, vw - half - 8);
    this.bubble.style.left = `${Math.round(center)}px`;
    if (top > 96) {
      this.bubble.style.top = `${Math.round(top - 6)}px`;
      this.bubble.dataset.side = 'above';
      this.bubble.style.setProperty('--fm-ty', '-100%');
    } else {
      this.bubble.style.top = `${Math.round(top + height + 8)}px`;
      this.bubble.dataset.side = 'below';
      this.bubble.style.setProperty('--fm-ty', '0%');
    }
  }

  positionPanel(left, top, width) {
    const panelWidth = this.panel.offsetWidth || 252;
    const panelHeight = this.panel.offsetHeight || 360;
    const vw = this.win.innerWidth;
    const vh = this.win.innerHeight;
    let x = left + width + 10;
    if (x + panelWidth > vw - 8) x = left - panelWidth - 10;
    if (x < 8) x = clamp(left + width / 2 - panelWidth / 2, 8, vw - panelWidth - 8);
    const y = clamp(top + this.pet.offsetHeight - panelHeight, 10, Math.max(10, vh - panelHeight - 10));
    this.panel.style.left = `${Math.round(x)}px`;
    this.panel.style.top = `${Math.round(y)}px`;
  }

  togglePanel() { if (this.root.dataset.panel === 'open') this.closePanel(); else this.openPanel(); }
  openPanel() {
    this.showBubble(false);
    this.panel.dataset.visible = 'true';
    this.panel.offsetWidth;
    this.root.dataset.panel = 'open';
    this.gear?.setAttribute('aria-expanded', 'true');
    this.positionPanel(this.settings.x ?? 22, this.settings.y ?? 40, this.pet.getBoundingClientRect().width);
  }
  closePanel() {
    this.root.dataset.panel = 'closed';
    this.gear?.setAttribute('aria-expanded', 'false');
    this.panel.dataset.visible = 'false';
  }

  updateSessions(catalog, statuses) {
    if (this.disposed) return;
    const { running, waiting } = summarizeSessions(catalog, statuses);
    const wasRunning = this.session.running > 0;
    const wasWaiting = this.session.waiting > 0;
    this.session = { running, waiting };
    this.badge.textContent = String(running);
    this.root.dataset.working = String(running > 0);

    if (waiting > 0) {
      this.reaction = null;
      this.sessionState = 'waiting';
      if (!wasWaiting) this.say(pick(LINES.waiting, this.lastLine), 6000);
    } else if (running > 0) {
      this.sessionState = 'working';
      if (!wasRunning) {
        this.reaction = null;
        this.sleeping = false;
        this.say(running > 1 ? `陪你一起专注中… ${running} 个任务` : '陪你一起专注中…', 4000);
      }
    } else {
      this.sessionState = 'idle';
      if (wasRunning || wasWaiting) this.celebrate();
    }
    this.render();
  }

  updateStatusLine() {
    const el = this.shadow.querySelector('.fm-status');
    if (!el) return;
    const n = this.session.running;
    el.innerHTML = this.sleeping
      ? '睡着了 · 点一下叫醒'
      : this.reaction === 'pat'
        ? '正在被摸摸头 · 呼噜呼噜'
        : this.reaction === 'celebrate'
          ? '刚刚完成了一件事 · 辛苦啦'
          : this.session.waiting > 0
            ? '<b>等你确认</b> · 小铃举着小牌子'
            : n > 0
              ? `<b>${n}</b> 个任务进行中 · 小铃在陪你`
              : '待机中 · 在角落里陪你';
  }

  render() {
    if (this.disposed) return;
    const state = this.reaction || (this.sleeping && this.sessionState !== 'waiting' ? 'sleeping' : this.sessionState);
    this.root.dataset.state = state;
    for (const img of this.sprites) img.classList.toggle('is-active', img.dataset.key === state);
    this.updateSlice(state);
    const sleepButton = this.shadow.querySelector('.fm-sleep');
    if (sleepButton) sleepButton.textContent = this.sleeping ? '叫醒' : '睡觉';
    this.updateStatusLine();
  }

  updateSlice(state) {
    const src = SPRITES[state] || SPRITES.idle;
    this.slices.forEach((slice, i) => {
      slice.style.backgroundImage = `url("${src}")`;
      slice.style.backgroundPosition = `0 ${i * 20}%`;
    });
  }

  say(text, hold = 3600) {
    if (!text) return;
    this.bubbleText = text;
    this.bubble.textContent = text;
    const rect = this.pet.getBoundingClientRect();
    this.positionBubble(rect.left, rect.top, rect.width, rect.height);
    this.showBubble(true);
    this.win.clearTimeout(this.bubbleTimer);
    this.bubbleTimer = this.win.setTimeout(() => this.showBubble(false), hold);
  }
  showBubble(show) { this.root.dataset.bubble = String(Boolean(show)); }

  pat() {
    this.sleeping = false;
    this.setReaction('pat', 2200);
    this.say(pick(LINES.pat, this.lastLine), 2400);
  }
  celebrate() {
    this.setReaction('celebrate', 3400);
    this.say(pick(LINES.celebrate, this.lastLine), 3800);
  }
  setReaction(kind, ms) {
    this.reaction = kind;
    this.render();
    this.win.clearTimeout(this.reactionTimer);
    this.reactionTimer = this.win.setTimeout(() => {
      this.reaction = null;
      this.render();
    }, ms);
  }
  toggleSleep() {
    this.sleeping = !this.sleeping;
    this.reaction = null;
    if (this.sleeping) {
      this.say(pick(LINES.sleeping, this.lastLine), 3600);
    } else {
      this.say('唔…我醒了。', 2600);
    }
    this.render();
  }

  save() {
    try { globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(this.settings)); } catch { /* private mode */ }
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.win.clearTimeout(this.bubbleTimer);
    this.win.clearTimeout(this.reactionTimer);
    if (this.frame) this.win.cancelAnimationFrame(this.frame);
    this.resizeObserver?.disconnect();
    this.win.removeEventListener('resize', this.onResize);
    this.win.removeEventListener('pointermove', this.onPointerMove);
    this.doc.removeEventListener('pointerdown', this.onDocPointerDown, true);
    this.doc.removeEventListener('keydown', this.onKeyDown, true);
    try { delete this.host.__foxPet; } catch { /* detached */ }
    this.shadow.innerHTML = '';
  }
}
