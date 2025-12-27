import React, { useState, useEffect } from "react";

const sections = ["home", "about", "skills", "experience", "projects", "leadership", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // Highlight section in view
      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id, offset: Math.abs(rect.top) };
      });
      offsets.sort((a, b) => a.offset - b.offset);
      if (offsets[0]) setActive(offsets[0].id);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => scrollToSection("home")}>
          <span className="navbar__logo-dot" />
          <span className="navbar__logo-text">Vikrant</span>
        </div>
        <nav className="navbar__links">
          {sections.map((id) => (
            <button
              key={id}
              className={`navbar__link ${active === id ? "navbar__link--active" : ""}`}
              onClick={() => scrollToSection(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
