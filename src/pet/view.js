import { ART } from './art.js';
import { CSS } from './styles.js';
import { summarizeSessions } from './session.js';

const STORAGE_KEY = 'dsh.whale-musume.v1';
const BASE_SIZE = 220;
const DEFAULTS = Object.freeze({
  x: null,
  y: null,
  scale: 1,
  track: true,
  explode: false,
  motion: true,
  hidden: false,
});

const LINES = {
  hello: ['嗨，我是小汐。', '今天也一起加油吧～', '我在这儿陪你。'],
  idle: ['我在哦。', '写累了就摸摸我吧。', '摸鱼五分钟也没关系～', '今天也辛苦啦。'],
  working: ['陪你一起专注中…', '我也在认真看着哦。', '一起把这件事做完吧！'],
  waiting: ['这里需要你确认一下～', '有个选择在等你哦。', '我帮你举着小牌子。'],
  celebrate: ['完成啦！辛苦辛苦～', '好耶，收工！', '这一回合漂亮！'],
  sleeping: ['Zzz… 有事叫我。'],
  pat: ['嘿嘿…再摸一下也可以。', '呜…好痒。', '今天也最喜欢你了。'],
};

const STATUS = {
  idle: '待机中 · 在角落里陪你',
  working: '陪你工作中',
  waiting: '有事情等你确认',
  celebrate: '刚刚完成了一件事',
  sleeping: '睡着了 · 点一下叫醒',
  pat: '正在被摸摸头',
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function readSettings() {
  try {
    const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULTS,
      ...Object.fromEntries(Object.entries(parsed || {}).filter(([key]) => key in DEFAULTS)),
    };
  } catch {
    return { ...DEFAULTS };
  }
}

function pick(list, last) {
  if (!list.length) return '';
  let next = list[Math.floor(Math.random() * list.length)];
  if (list.length > 1 && next === last) next = list[(list.indexOf(next) + 1) % list.length];
  return next;
}

/**
 * Vanilla view for the companion. DSH only supplies a host element and the
 * session snapshots; everything visual lives inside a private shadow root.
 */
export class WhaleMusumeView {
  constructor(host, options = {}) {
    if (!host) throw new Error('WhaleMusumeView needs a host element');
    this.host = host;
    this.doc = host.ownerDocument;
    this.win = this.doc.defaultView || globalThis;
    this.lang = options.language?.startsWith?.('en') ? 'en' : 'zh';
    this.settings = readSettings();
    this.session = { running: 0, waiting: 0, ready: false };
    this.sessionState = 'idle';
    this.reaction = null;
    this.sleeping = false;
    this.lastLine = '';
    this.bubbleTimer = 0;
    this.reactionTimer = 0;
    this.idleTimer = 0;
    this.drag = null;
    this.pinHighlight = null;
    this.pointer = { x: 0, y: 0 };
    this.disposed = false;
    this.frame = 0;

    this.shadow = host.shadowRoot || host.attachShadow({ mode: 'open' });
    this.shadow.innerHTML = `<style>${CSS}</style>${this.template()}`;
    host.__whaleMusume = this;
    this.root = this.shadow.querySelector('.wm-root');
    this.pet = this.shadow.querySelector('.wm-pet');
    this.art = this.shadow.querySelector('.wm-art');
    this.bubble = this.shadow.querySelector('.wm-bubble');
    this.panel = this.shadow.querySelector('.wm-panel');
    this.gear = this.shadow.querySelector('.wm-gear');
    this.badge = this.shadow.querySelector('.wm-badge');

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
    this.idleTimer = this.win.setTimeout(() => this.say(pick(LINES.hello, this.lastLine), 4200), 900);
  }

  template() {
    return `
      <div class="wm-root" data-state="idle" data-panel="closed" data-hidden="false" data-explode="false" data-motion="on">
        <div class="wm-pet" tabindex="0" role="button" aria-label="鲸鱼娘小汐，拖拽移动，点击摸摸头">
          <div class="wm-hit"></div>
          <div class="wm-art-wrap">${ART}</div>
          <div class="wm-badge" aria-hidden="true">0</div>
          <button class="wm-gear" type="button" title="小汐的设置" aria-label="打开小汐的设置" aria-expanded="false">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              <circle cx="6.2" cy="4.5" r="1.7" fill="var(--wm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
              <circle cx="10" cy="8" r="1.7" fill="var(--wm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
              <circle cx="5" cy="11.5" r="1.7" fill="var(--wm-card, #fff)" stroke="currentColor" stroke-width="1.2"/>
            </svg>
          </button>
        </div>

        <div class="wm-bubble" role="status" aria-live="polite"></div>

        <div class="wm-panel" role="dialog" aria-label="小汐的设置">
          <div class="wm-panel-head">
            <strong>小汐</strong>
            <span class="wm-tag">鲸鱼娘</span>
            <button class="wm-close" type="button" aria-label="关闭设置">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </div>
          <p class="wm-status"></p>

          <div class="wm-row">
            <label for="wm-size">大小</label>
            <span class="wm-value wm-size-value">100%</span>
            <div class="wm-range"><input id="wm-size" class="wm-size" type="range" min="70" max="145" step="5" value="100" aria-label="桌宠大小"></div>
          </div>

          <div class="wm-divider"></div>

          <div class="wm-row">
            <label id="wm-track-label">视线跟随</label>
            <button class="wm-switch wm-track" type="button" role="switch" aria-checked="true" aria-labelledby="wm-track-label"></button>
          </div>
          <div class="wm-row">
            <label id="wm-explode-label">分割视图</label>
            <button class="wm-switch wm-explode" type="button" role="switch" aria-checked="false" aria-labelledby="wm-explode-label"></button>
          </div>
          <div class="wm-row">
            <label id="wm-motion-label">动态效果</label>
            <button class="wm-switch wm-motion" type="button" role="switch" aria-checked="true" aria-labelledby="wm-motion-label"></button>
          </div>

          <div class="wm-divider"></div>

          <div class="wm-layers" aria-label="图层">
            <button class="wm-chip" type="button" data-layer="hair" style="--chip:#6f86e8">后发</button>
            <button class="wm-chip" type="button" data-layer="head" style="--chip:#ffcf9e">头部</button>
            <button class="wm-chip" type="button" data-layer="body" style="--chip:#8cecf8">身体</button>
            <button class="wm-chip" type="button" data-layer="arms" style="--chip:#f6a7b8">手臂</button>
            <button class="wm-chip" type="button" data-layer="tail" style="--chip:#4159b4">尾巴</button>
          </div>

          <div class="wm-actions">
            <button class="wm-action primary wm-pat" type="button">摸摸头</button>
            <button class="wm-action wm-sleep" type="button">睡觉</button>
            <button class="wm-action wm-hide" type="button">隐藏</button>
          </div>
          <p class="wm-foot">拖拽移动 · 右键打开设置 · 双击唤醒</p>
        </div>

        <button class="wm-restore" type="button" aria-label="找回小汐">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 9c3.2.4 5.2-1.7 6-4 1.1 3.2 3.4 4.1 6 3.4-1 2.5-3.4 4.1-6.1 4.1S2.8 11.4 2 9Z" fill="#3fbcd4"/>
            <path d="M8 1.8c1.2 1 1.9 2.2 2.2 3.4C9.2 5.8 8.4 5 8 4.2 7.6 5 6.8 5.8 5.8 6.2 6.1 5 6.8 3.8 8 1.8Z" fill="#8cecf8"/>
          </svg>
          找回小汐
        </button>
      </div>`;
  }

  bind() {
    this.onResize = () => { this.clampPosition(); this.layout(); };
    this.onDocPointerDown = event => {
      if (this.root.dataset.panel !== 'open') return;
      const path = event.composedPath?.() || [];
      if (path.includes(this.panel) || path.includes(this.gear)) return;
      this.closePanel();
    };
    this.onKeyDown = event => {
      if (event.key === 'Escape' && this.root.dataset.panel === 'open') this.closePanel();
    };
    this.onPointerMove = event => {
      if (!this.settings.track || this.settings.explode || this.reaction === 'pat') return;
      const rect = this.pet.getBoundingClientRect();
      if (!rect.width) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height * 0.48;
      const dx = clamp((event.clientX - cx) / Math.max(220, this.win.innerWidth * 0.5), -1, 1);
      const dy = clamp((event.clientY - cy) / Math.max(180, this.win.innerHeight * 0.55), -1, 1);
      if (this.frame) return;
      this.frame = this.win.requestAnimationFrame(() => {
        this.frame = 0;
        if (this.disposed) return;
        this.pointer = { x: dx, y: dy };
        this.applyGaze();
      });
    };

    this.pet.addEventListener('pointerdown', this.onPetDown.bind(this));
    this.pet.addEventListener('pointermove', this.onPetMove.bind(this));
    this.pet.addEventListener('pointerup', this.onPetUp.bind(this));
    this.pet.addEventListener('pointercancel', this.onPetUp.bind(this));
    this.pet.addEventListener('contextmenu', event => {
      event.preventDefault();
      this.togglePanel();
    });
    this.pet.addEventListener('pointerenter', () => {
      if (this.root.dataset.bubble !== 'true' && this.bubbleText) this.showBubble(true);
    });
    this.pet.addEventListener('pointerleave', () => {
      if (this.root.dataset.bubble === 'true' && this.reaction !== 'pat') this.showBubble(false);
    });
    this.pet.addEventListener('dblclick', event => {
      event.preventDefault();
      this.toggleSleep();
    });
    this.pet.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.pat();
      }
    });

    this.gear.addEventListener('click', event => {
      event.stopPropagation();
      this.togglePanel();
    });
    this.shadow.querySelector('.wm-close').addEventListener('click', () => this.closePanel());
    this.shadow.querySelector('.wm-restore').addEventListener('click', () => {
      this.settings.hidden = false;
      this.applySettings({ layout: true });
      this.save();
      this.say('我回来啦。', 2600);
    });

    this.sizeInput = this.shadow.querySelector('.wm-size');
    this.sizeInput.addEventListener('input', () => {
      this.settings.scale = Number(this.sizeInput.value) / 100;
      this.applySettings({ layout: true });
      this.save();
    });

    this.trackSwitch = this.shadow.querySelector('.wm-track');
    this.trackSwitch.addEventListener('click', () => {
      this.settings.track = !this.settings.track;
      this.applySettings();
      this.save();
    });

    this.explodeSwitch = this.shadow.querySelector('.wm-explode');
    this.explodeSwitch.addEventListener('click', () => {
      this.settings.explode = !this.settings.explode;
      this.applySettings();
      this.save();
    });

    this.motionSwitch = this.shadow.querySelector('.wm-motion');
    this.motionSwitch.addEventListener('click', () => {
      this.settings.motion = !this.settings.motion;
      this.applySettings();
      this.save();
    });

    for (const chip of this.shadow.querySelectorAll('.wm-chip')) {
      chip.addEventListener('pointerenter', () => {
        if (!this.pinHighlight) this.root.dataset.hl = chip.dataset.layer;
      });
      chip.addEventListener('pointerleave', () => {
        if (!this.pinHighlight) delete this.root.dataset.hl;
      });
      chip.addEventListener('click', () => {
        const layer = chip.dataset.layer;
        this.pinHighlight = this.pinHighlight === layer ? null : layer;
        if (this.pinHighlight) this.root.dataset.hl = layer;
        else delete this.root.dataset.hl;
        for (const item of this.shadow.querySelectorAll('.wm-chip')) {
          item.setAttribute('aria-pressed', String(item.dataset.layer === this.pinHighlight));
        }
      });
    }

    this.shadow.querySelector('.wm-pat').addEventListener('click', () => this.pat());
    this.shadow.querySelector('.wm-sleep').addEventListener('click', () => this.toggleSleep());
    this.shadow.querySelector('.wm-hide').addEventListener('click', () => {
      this.settings.hidden = true;
      this.closePanel();
      this.applySettings();
      this.save();
    });
  }

  onPetDown(event) {
    if (event.button !== 0) return;
    if (event.target.closest?.('.wm-gear')) return;
    const rect = this.pet.getBoundingClientRect();
    this.drag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      left: rect.left,
      top: rect.top,
      moved: false,
      at: Date.now(),
    };
    try { this.pet.setPointerCapture?.(event.pointerId); } catch { /* synthetic or already-cancelled pointer */ }
    this.pet.dataset.dragging = 'false';
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
    if (drag.moved) {
      this.layout();
      this.save();
      return;
    }
    if (Date.now() - drag.at < 700) this.pat();
  }

  applySettings({ layout = false } = {}) {
    const { scale, track, explode, motion, hidden } = this.settings;
    const px = Math.round(BASE_SIZE * scale);
    this.root.style.setProperty('--wm-size', `${px}px`);
    this.root.dataset.motion = motion ? 'on' : 'off';
    this.root.dataset.explode = String(Boolean(explode));
    this.root.dataset.hidden = String(Boolean(hidden));
    this.trackSwitch?.setAttribute('aria-checked', String(Boolean(track)));
    this.explodeSwitch?.setAttribute('aria-checked', String(Boolean(explode)));
    this.motionSwitch?.setAttribute('aria-checked', String(Boolean(motion)));
    if (this.sizeInput) {
      this.sizeInput.value = String(Math.round(scale * 100));
      this.sizeInput.style.setProperty('--wm-p', `${((scale * 100 - 70) / 75) * 100}%`);
    }
    const value = this.shadow.querySelector('.wm-size-value');
    if (value) value.textContent = `${Math.round(scale * 100)}%`;
    if (!track) this.resetGaze();
    if (layout) this.layout();
    if (explode) this.render();
  }

  layout() {
    if (this.disposed) return;
    const rect = this.pet.getBoundingClientRect();
    const declared = Number.parseFloat(this.root.style.getPropertyValue('--wm-size')) || BASE_SIZE;
    const width = rect.width || declared;
    const height = rect.height || width * (320 / 240);
    const vw = this.win.innerWidth;
    const vh = this.win.innerHeight;
    const restored = this.settings.x == null || this.settings.y == null;
    let left = restored ? 22 : this.settings.x;
    let top = restored ? vh - height - 60 : this.settings.y;
    left = clamp(left, 4, Math.max(4, vw - width - 4));
    top = clamp(top, 4, Math.max(4, vh - height - 4));
    this.setPosition(left, top, { persist: false });
    this.positionPanel(left, top, width);
    this.positionBubble(left, top, width, height);
  }

  setPosition(left, top, { persist = true } = {}) {
    this.pet.style.left = `${Math.round(left)}px`;
    this.pet.style.top = `${Math.round(top)}px`;
    this.settings.x = Math.round(left);
    this.settings.y = Math.round(top);
    if (persist) this.save();
    this.positionBubble(left, top, this.pet.getBoundingClientRect().width, this.pet.getBoundingClientRect().height);
    if (this.root.dataset.panel === 'open') this.positionPanel(left, top, this.pet.getBoundingClientRect().width);
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
      this.bubble.style.setProperty('--wm-ty', '-100%');
    } else {
      this.bubble.style.top = `${Math.round(top + height + 8)}px`;
      this.bubble.dataset.side = 'below';
      this.bubble.style.setProperty('--wm-ty', '0%');
    }
  }

  positionPanel(left, top, width) {
    const panelWidth = this.panel.offsetWidth || 252;
    const panelHeight = this.panel.offsetHeight || 330;
    const vw = this.win.innerWidth;
    const vh = this.win.innerHeight;
    let x = left + width + 10;
    if (x + panelWidth > vw - 8) x = left - panelWidth - 10;
    if (x < 8) x = clamp(left + width / 2 - panelWidth / 2, 8, vw - panelWidth - 8);
    const y = clamp(top + this.pet.offsetHeight - panelHeight, 10, Math.max(10, vh - panelHeight - 10));
    this.panel.style.left = `${Math.round(x)}px`;
    this.panel.style.top = `${Math.round(y)}px`;
  }

  togglePanel() {
    if (this.root.dataset.panel === 'open') this.closePanel();
    else this.openPanel();
  }

  openPanel() {
    this.showBubble(false);
    this.panel.dataset.visible = 'true';
    this.panel.offsetWidth; // commit the size before measuring
    this.root.dataset.panel = 'open';
    this.gear?.setAttribute('aria-expanded', 'true');
    this.positionPanel(this.settings.x ?? 22, this.settings.y ?? 40, this.pet.getBoundingClientRect().width);
  }

  closePanel() {
    this.root.dataset.panel = 'closed';
    this.gear?.setAttribute('aria-expanded', 'false');
    this.panel.dataset.visible = 'false';
  }

  applyGaze() {
    if (!this.settings.track) return this.resetGaze();
    const { x, y } = this.pointer;
    this.art.style.setProperty('--wm-hx', `${(x * 4.5).toFixed(2)}px`);
    this.art.style.setProperty('--wm-hy', `${(y * 3).toFixed(2)}px`);
    this.art.style.setProperty('--wm-hr', `${(x * 1.8).toFixed(2)}deg`);
    this.art.style.setProperty('--wm-px', `${(x * 2.8).toFixed(2)}px`);
    this.art.style.setProperty('--wm-py', `${(y * 2.2).toFixed(2)}px`);
  }

  resetGaze() {
    for (const name of ['--wm-hx', '--wm-hy', '--wm-hr', '--wm-px', '--wm-py']) {
      this.art.style.removeProperty(name);
    }
  }

  updateSessions(catalog, statuses) {
    if (this.disposed) return;
    const { running, waiting } = summarizeSessions(catalog, statuses);
    const wasRunning = this.session.running > 0;
    const wasWaiting = this.session.waiting > 0;
    this.session = { running, waiting, ready: catalog?.phase === 'ready' || running + waiting > 0 };
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
    this.updateStatusLine();
    this.render();
  }

  updateStatusLine() {
    const el = this.shadow.querySelector('.wm-status');
    if (!el) return;
    const n = this.session.running;
    el.innerHTML = this.sleeping
      ? '睡着了 · 点一下叫醒'
      : this.reaction === 'pat'
        ? '正在被摸摸头 · 呼噜呼噜'
        : this.reaction === 'celebrate'
          ? '刚刚完成了一件事 · 辛苦啦'
          : this.session.waiting > 0
            ? '<b>等你确认</b> · 小汐举着小牌子'
            : n > 0
              ? `<b>${n}</b> 个任务进行中 · 小汐在陪你`
              : '待机中 · 在角落里陪你';
  }

  render() {
    if (this.disposed) return;
    const state = this.reaction || (this.sleeping && this.sessionState !== 'waiting' ? 'sleeping' : this.sessionState);
    this.root.dataset.state = state;
    const sleepButton = this.shadow.querySelector('.wm-sleep');
    if (sleepButton) sleepButton.textContent = this.sleeping ? '叫醒' : '睡觉';
    this.updateStatusLine();
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

  showBubble(show) {
    this.root.dataset.bubble = String(Boolean(show));
  }

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
    this.updateStatusLine();
    this.win.clearTimeout(this.reactionTimer);
    this.reactionTimer = this.win.setTimeout(() => {
      this.reaction = null;
      this.render();
      this.updateStatusLine();
    }, ms);
  }

  toggleSleep() {
    this.sleeping = !this.sleeping;
    this.reaction = null;
    if (this.sleeping) {
      this.say(pick(LINES.sleeping, this.lastLine), 3600);
      this.resetGaze();
    } else {
      this.say('唔…我醒了。', 2600);
    }
    this.render();
    this.updateStatusLine();
  }

  save() {
    try {
      globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(this.settings));
    } catch { /* private mode or a locked-down webview */ }
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.win.clearTimeout(this.bubbleTimer);
    this.win.clearTimeout(this.reactionTimer);
    this.win.clearTimeout(this.idleTimer);
    if (this.frame) this.win.cancelAnimationFrame(this.frame);
    this.resizeObserver?.disconnect();
    this.win.removeEventListener('resize', this.onResize);
    this.win.removeEventListener('pointermove', this.onPointerMove);
    this.doc.removeEventListener('pointerdown', this.onDocPointerDown, true);
    this.doc.removeEventListener('keydown', this.onKeyDown, true);
    try { delete this.host.__whaleMusume; } catch { /* host may already be detached */ }
    this.shadow.innerHTML = '';
  }
}
