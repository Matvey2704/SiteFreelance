// Лёгкий параллакс: слои с data-depth смещаются вслед за курсором.
export function createParallax(layers) {
  let mx = 0, my = 0;       // положение курсора (-0.5 … 0.5)
  let px = 0, py = 0;       // сглаженное смещение
  let lastX = 1, lastY = 1; // что уже записано в DOM

  addEventListener('mousemove', (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });

  return {
    /** @param {boolean} frozen  true, когда открыт раздел — параллакс возвращается в ноль */
    tick(frozen) {
      const k = frozen ? 0 : 1;
      px += (mx * k - px) * 0.06;
      py += (my * k - py) * 0.06;
      if (Math.abs(px - lastX) < 0.0004 && Math.abs(py - lastY) < 0.0004) return;
      lastX = px;
      lastY = py;
      for (const layer of layers) {
        const depth = +layer.dataset.depth;
        layer.setAttribute('transform', `translate(${(-px * depth).toFixed(2)},${(-py * depth * 0.6).toFixed(2)})`);
      }
    },
  };
}
