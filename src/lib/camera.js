// Камера: плавно меняет viewBox у SVG-сцены, «подлетая» к нужному экрану.
const DURATION = 950;
const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);

/**
 * @param {SVGSVGElement} svg
 * @param {Record<string, {cx:number, cy:number, w:number, h:number}>} targets  точки интереса (в координатах сцены 1600×900)
 * @param {{ onArrive?: () => void }} hooks
 */
export function createCamera(svg, targets, { onArrive } = {}) {
  const aspect = () => {
    const r = svg.getBoundingClientRect();
    return r.width / r.height || innerWidth / innerHeight;
  };
  const home = () => {
    const A = aspect();
    return { cx: 800, cy: 470, vw: A >= 16 / 9 ? 1600 : 900 * A };
  };
  const targetFor = (id) => {
    const t = targets[id];
    const A = aspect();
    return { cx: t.cx, cy: t.cy, vw: Math.max(t.w * 1.45, t.h * 1.6 * A) };
  };

  let cam = home();
  let from = cam;
  let to = cam;
  let startedAt = 0;
  let moving = false;

  function apply(c) {
    const A = aspect();
    const vh = c.vw / A;
    const w = A >= 16 / 9 ? c.vw : (vh * 16) / 9;
    const h = (w * 9) / 16;
    svg.setAttribute('viewBox', `${c.cx - w / 2} ${c.cy - h / 2} ${w} ${h}`);
  }

  function flyTo(target) {
    from = { ...cam };
    to = target;
    startedAt = performance.now();
    moving = true;
    document.body.classList.add('moving');
  }

  apply(cam);

  return {
    flyToSection: (id) => flyTo(targetFor(id)),
    flyHome: () => flyTo(home()),
    /** Вызывается каждый кадр */
    tick(now) {
      if (!moving) return;
      const p = Math.min(1, (now - startedAt) / DURATION);
      const e = ease(p);
      cam = {
        cx: from.cx + (to.cx - from.cx) * e,
        cy: from.cy + (to.cy - from.cy) * e,
        vw: from.vw + (to.vw - from.vw) * e,
      };
      if (p === 1) {
        moving = false;
        document.body.classList.remove('moving');
        onArrive?.();
      }
      apply(cam);
    },
    /** Пересчитать после изменения размера окна */
    refresh({ keepZoom }) {
      if (moving) return;
      cam = keepZoom ? cam : home();
      apply(cam);
    },
  };
}
