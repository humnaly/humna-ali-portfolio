"use client";

import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Keep Navigation Accessible Even When JavaScript Is Disabled.
    document.body.classList.add("ha-menu-ready");
    return () => document.body.classList.remove("ha-menu-ready");
  }, []);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        if (menuOpen) toggleRef.current?.focus();
      }
    }
    function closeOutside(event: MouseEvent) {
      if (!(event.target instanceof Node)) return;
      if (!navRef.current?.contains(event.target) && !toggleRef.current?.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("click", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("click", closeOutside);
    };
  }, [menuOpen]);

  return (
    <header className="ha-header ha-wrap">
      <p className="brand"><a href="#home" aria-label="Humna Ali Home">Humna<span className="accent">.</span></a></p>
      <button
        ref={toggleRef}
        className="ha-menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="ha-menu"
        onClick={() => setMenuOpen(open => !open)}
      >
        Menu <span aria-hidden="true">☰</span>
      </button>
      <nav id="ha-menu" ref={navRef} className={`ha-menu${menuOpen ? " is-open" : ""}`} aria-label="Main Navigation">
        {navigation.map(link => (
          <p key={link.href}><a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a></p>
        ))}
      </nav>
      <div className="wp-block-buttons">
        <div className="wp-block-button"><a className="wp-block-button__link wp-element-button" href="#contact" onClick={() => setMenuOpen(false)}>Let’s Talk ↗</a></div>
      </div>
    </header>
  );
}
