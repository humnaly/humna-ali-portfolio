"use client";

import { useEffect } from "react";

export default function PortfolioEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revealObserver: IntersectionObserver | undefined;

    if (!reduceMotion && "IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("ha-enter");
            revealObserver?.unobserve(entry.target);
          }
        }
      }, { threshold: 0.08 });
      for (const el of document.querySelectorAll<HTMLElement>(".ha-reveal")) {
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.add("ha-enter");
          revealObserver.observe(el);
        }
      }
    }

    const art = document.querySelector<HTMLElement>(".ha-hero-visual");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let frame = 0;
    function handlePointerMove(event: PointerEvent) {
      if (!art) return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = art.getBoundingClientRect();
        if (!bounds.width || !bounds.height) return;
        const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
        art.style.setProperty("--px", `${x * 100}%`);
        art.style.setProperty("--py", `${y * 100}%`);
        art.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
        art.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
        frame = 0;
      });
    }
    function clearPointerMotion() {
      if (!art) return;
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      for (const prop of ["--px", "--py", "--rx", "--ry"]) art.style.removeProperty(prop);
    }
    if (!reduceMotion && finePointer && art) {
      art.addEventListener("pointermove", handlePointerMove);
      art.addEventListener("pointerleave", clearPointerMotion);
    }

    return () => {
      revealObserver?.disconnect();
      document.querySelectorAll(".ha-enter").forEach(el => el.classList.remove("ha-enter"));
      if (art) {
        art.removeEventListener("pointermove", handlePointerMove);
        art.removeEventListener("pointerleave", clearPointerMotion);
      }
      clearPointerMotion();
    };
  }, []);

  return null;
}
