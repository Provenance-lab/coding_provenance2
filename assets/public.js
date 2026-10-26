// Public pages: the participant gate.

// ---------- Participant gate (v1) ----------
// Compares a PBKDF2 hash of what was typed with window.CP_ACCESS. This keeps
// casual visitors out of participants/; it is not security.
(() => {
  const form = document.querySelector('.gate-form');
  if (!form) return;

  const params = new URLSearchParams(location.search);
  const requested = params.get('next') || 'index.html';
  const next = /^[a-z0-9-]+(\.html)?$/.test(requested) ? requested : 'index.html';
  const destination = `participants/${next}`;

  let token = null;
  try { token = sessionStorage.getItem('cp-access') || localStorage.getItem('cp-access'); } catch (e) {}
  if (token === window.CP_ACCESS) { location.replace(destination); return; }

  const input = form.querySelector('input[type="password"]');
  const remember = form.querySelector('input[type="checkbox"]');
  const button = form.querySelector('button');
  const message = form.querySelector('.gate-message');

  const derive = async (password) => {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits(
      { name: 'PBKDF2', hash: 'SHA-256', salt: encoder.encode('coding-provenance-2026'), iterations: 310000 },
      key, 256);
    return [...new Uint8Array(bits)].map((b) => b.toString(16).padStart(2, '0')).join('');
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!input.value) {
      message.textContent = 'Enter the participant password.';
      form.classList.add('has-error');
      input.focus();
      return;
    }
    button.disabled = true;
    button.textContent = 'Checking…';
    message.textContent = '';
    form.classList.remove('has-error');

    const hash = await derive(input.value);
    if (hash === window.CP_ACCESS) {
      try { (remember.checked ? localStorage : sessionStorage).setItem('cp-access', hash); } catch (e) {}
      location.href = destination;
      return;
    }
    button.disabled = false;
    button.textContent = 'Enter';
    message.textContent = 'That password is not right. Check it and try again.';
    form.classList.add('has-error');
    input.setAttribute('aria-invalid', 'true');
    input.select();
  });

  input.addEventListener('input', () => input.removeAttribute('aria-invalid'));
})();

// ---------- The four steps, drawn ----------
// An abstract provenance record: a sentence of grey words, some of them
// entities. Structuring colours the entities, preprocessing lines them up as
// table rows (hatched where a date is missing), analysing turns each holder
// into a dot, visualising puts the dots on a timeline drawn to scale. It
// holds on the timeline, fades, and starts again.
(() => {
  const figure = document.querySelector('.anim');
  if (!figure) return;
  const svg = figure.querySelector('svg');
  const steps = [...figure.querySelectorAll('.anim-steps li')];
  const NS = 'http://www.w3.org/2000/svg';
  const T = 12000;
  const S = 0.72; // the four steps take this share of each cycle; the rest is the hold and fade
  const colour = { person: '#0072b2', place: '#d55e00', inst: '#009e73', event: '#7a52cc' };
  const grey = '#dacfc2';
  const field = '#f3e9dc';
  const ruleStrong = '#cbbba8';
  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

  let stage = svg;
  const make = (name, attrs, parent = stage) => {
    const node = document.createElementNS(NS, name);
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    parent.append(node);
    return node;
  };
  const animations = [];
  const options = { duration: T, fill: 'both', iterations: Infinity };
  // Offsets below are written on a 0..1 scale for the four steps and compressed into S.
  const run = (node, frames) => animations.push(node.animate(
    frames.map((f) => ({ ...f, offset: f.offset === 1 ? 1 : f.offset * S })), options));
  // Opacity that rises at `from` and falls at `to` (offsets on the 0..1 timeline).
  const visible = (from, to, rise = 0.05, fall = 0.06) => [
    { opacity: 0, offset: 0 }, { opacity: 0, offset: from, easing: ease }, { opacity: 1, offset: from + rise },
    ...(to < 1 ? [{ opacity: 1, offset: to }, { opacity: 0, offset: to + fall }] : []), { opacity: to < 1 ? 0 : 1, offset: 1 },
  ];

  const defs = make('defs', {});
  const pattern = make('pattern', { id: 'anim-hatch', width: 4, height: 4, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, defs);
  make('rect', { width: 1, height: 4, fill: ruleStrong }, pattern);
  stage = make('g', {}, svg);
  animations.push(stage.animate([
    { opacity: 0, offset: 0 }, { opacity: 1, offset: 0.02 }, { opacity: 1, offset: 0.93 }, { opacity: 0, offset: 1 },
  ], options));

  // The sentence: [width, type, id]. An id ties an entity to its table cell.
  const lines = [
    [[52, 'event'], [20], [96, 'person', 'h1'], [64, 'place', 'p1'], [36, 'event', 'd1'], [70], [18], [88, 'person', 'h2']],
    [[60, 'place', 'p2'], [70], [18], [110, 'person', 'h3'], [72, 'place', 'p3'], [64], [40], [60]],
    [[66, 'event'], [20], [28], [124, 'inst', 'h4'], [36], [28], [112, 'inst', 'h5'], [36, 'event', 'd4']],
    [[90, 'event'], [24], [70], [44], [80], [36, 'event', 'd5']],
  ];
  // Table rows after preprocessing: holder, place, date ('gap' where it is missing).
  const rows = [['h1', 'p1', 'd1'], ['h2', 'p2', 'gap'], ['h3', 'p3', 'gap'], ['h4', null, 'd4'], ['h5', null, 'd5']];
  const col = [32, 208, 336];
  const rowY = (r) => 36 + r * 32;
  const year = (y) => 60 + ((y - 1895) / 127) * 520;
  const timelineY = 108;
  const holderX = { h1: year(1895), h2: 230, h3: 400, h4: year(2018), h5: year(2022) };

  // Words that stay in the sentence fade in, are coloured if they are events,
  // and leave when the table forms.
  const cells = {};
  let n = 0;
  lines.forEach((line, l) => {
    let x = 32;
    const y = 36 + l * 32;
    line.forEach(([width, type, id]) => {
      const start = 0.01 + n * 0.0025;
      n += 1;
      if (id) {
        cells[id] = { type, x, y, width, start };
      } else {
        run(make('rect', { x, y, width, height: 12, rx: 3, fill: grey }), visible(start, 0.3));
        if (type) {
          run(make('rect', { x, y, width, height: 12, rx: 3, fill: colour[type] }), visible(0.15 + n * 0.002, 0.3));
        }
      }
      x += width + 8;
    });
  });

  // Missing dates show as hatched cells in the table.
  rows.forEach((row, r) => {
    if (row[2] !== 'gap') return;
    const gap = make('rect', { x: col[2], y: rowY(r), width: 36, height: 12, fill: 'url(#anim-hatch)', stroke: ruleStrong, 'stroke-width': 1 });
    run(gap, visible(0.44, 0.66));
  });

  // The timeline: a line drawn left to right, the undated stretch hatched.
  const line = make('rect', { x: 40, y: timelineY - 0.5, width: 560, height: 1, fill: '#b3a697', class: 'anim-bar' });
  run(line, [{ transform: 'scaleX(0)', offset: 0 }, { transform: 'scaleX(0)', offset: 0.68, easing: ease }, { transform: 'scaleX(1)', offset: 0.8 }, { transform: 'scaleX(1)', offset: 1 }]);
  const band = make('rect', { x: year(1895), y: timelineY - 4, width: year(2018) - year(1895), height: 8, fill: 'url(#anim-hatch)' });
  run(band, visible(0.8, 1, 0.1));

  // Entities: coloured, moved into rows, reduced; holders end on the timeline.
  rows.forEach((row, r) => row.forEach((id, c) => {
    if (!id || id === 'gap') return;
    const cell = cells[id];
    const group = make('g', {});
    const base = make('rect', { width: cell.width, height: 12, rx: 3, fill: grey, class: 'anim-bar' }, group);
    const tint = make('rect', { width: cell.width, height: 12, rx: 3, fill: colour[cell.type], class: 'anim-bar' }, group);
    const text = `translate(${cell.x}px, ${cell.y}px)`;
    const table = `translate(${col[c]}px, ${rowY(r)}px)`;
    const lag = r * 0.012;
    const colourAt = 0.15 + r * 0.01 + c * 0.006;
    const frames = [
      { transform: text, opacity: 0, offset: 0 },
      { transform: text, opacity: 0, offset: cell.start, easing: ease },
      { transform: text, opacity: 1, offset: cell.start + 0.05 },
      { transform: text, opacity: 1, offset: 0.32 + lag, easing: ease },
      { transform: table, opacity: 1, offset: 0.46 + lag },
    ];
    if (c === 0) {
      const target = `translate(${holderX[id] - 6}px, ${timelineY - 6}px)`;
      frames.push({ transform: table, opacity: 1, offset: 0.7 + lag, easing: ease }, { transform: target, opacity: 1, offset: 0.86 + lag }, { transform: target, opacity: 1, offset: 1 });
      // The bar shrinks into a dot; hollow where the date is unknown.
      const shrink = [{ transform: 'scaleX(1)', opacity: 1, offset: 0 }, { transform: 'scaleX(1)', opacity: 1, offset: 0.54 + lag, easing: ease }, { transform: 'scaleX(0.1)', opacity: 0, offset: 0.62 + lag }, { transform: 'scaleX(0.1)', opacity: 0, offset: 1 }];
      run(base, shrink);
      run(tint, [{ transform: 'scaleX(1)', opacity: 0, offset: 0 }, { transform: 'scaleX(1)', opacity: 0, offset: colourAt, easing: ease }, { transform: 'scaleX(1)', opacity: 1, offset: colourAt + 0.06 }, ...shrink.slice(1)]);
      const unknown = row[2] === 'gap';
      const dot = make('circle', { cx: 6, cy: 6, r: 6, fill: unknown ? field : colour[cell.type], stroke: colour[cell.type], 'stroke-width': unknown ? 2 : 0, class: 'anim-dot' }, group);
      run(dot, [{ transform: 'scale(0)', offset: 0 }, { transform: 'scale(0)', offset: 0.56 + lag, easing: ease }, { transform: 'scale(1)', offset: 0.64 + lag }, { transform: 'scale(1)', offset: 1 }]);
    } else {
      const out = c === 1 ? 0.54 : 0.66;
      frames.push({ transform: table, opacity: 1, offset: out }, { transform: table, opacity: 0, offset: out + 0.06 }, { transform: table, opacity: 0, offset: 1 });
      run(tint, visible(colourAt, 1, 0.06));
    }
    run(group, frames);
  }));

  // Captions follow the phases.
  const phases = [0.14, 0.3, 0.52, 0.67].map((p) => p * S);
  const master = animations[0];
  const caption = () => {
    const t = ((master.currentTime || 0) % T) / T;
    steps.forEach((li, i) => {
      const end = i === 3 ? 0.93 : phases[i + 1];
      li.classList.toggle('is-active', t >= phases[i] && t < end);
      li.classList.toggle('is-done', t >= end && t < 0.93);
    });
    if (master.playState === 'running') requestAnimationFrame(caption);
  };

  const all = (fn) => animations.forEach(fn);
  all((a) => a.pause());

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    all((a) => { a.currentTime = 0.85 * T; });
    caption();
    return;
  }

  const play = () => { all((a) => a.play()); requestAnimationFrame(caption); };
  const hold = () => all((a) => a.pause());

  // Run only while the drawing is on screen.
  new IntersectionObserver((entries) => {
    const onScreen = entries.some((e) => e.isIntersecting);
    if (onScreen) play(); else hold();
  }, { threshold: 0.25 }).observe(figure);
})();
