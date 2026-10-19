(() => {
  'use strict';
  const toggle = document.querySelector('.ha-menu-toggle');
  const menu = document.getElementById('ha-menu');
  if (toggle && menu) {
    document.body.classList.add('ha-menu-ready');
    const close = () => { toggle.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open)); menu.classList.toggle('is-open', open);
    });
    menu.addEventListener('click', e => { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); } });
    document.addEventListener('click', e => { if (!menu.contains(e.target) && !toggle.contains(e.target)) close(); });
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.remove('ha-enter'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.ha-reveal').forEach(el => {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('ha-enter'); observer.observe(el); }
    });
  }
})();

(() => {
  'use strict';
  const art = document.querySelector('.ha-hero-visual');
  if (!art || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let frame = 0;
  art.addEventListener('pointermove', e => {
    if (frame) cancelAnimationFrame(frame);
    const x = e.clientX, y = e.clientY;
    frame = requestAnimationFrame(() => {
      const box = art.getBoundingClientRect();
      const px = Math.min(1,Math.max(0,(x-box.left)/box.width));
      const py = Math.min(1,Math.max(0,(y-box.top)/box.height));
      art.style.setProperty('--px', `${px*100}%`);
      art.style.setProperty('--py', `${py*100}%`);
      art.style.setProperty('--rx', `${(0.5-py)*6}deg`);
      art.style.setProperty('--ry', `${(px-0.5)*6}deg`);
      frame = 0;
    });
  });
  art.addEventListener('pointerleave', () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    ['--px','--py','--rx','--ry'].forEach(key => art.style.removeProperty(key));
  });
})();
