import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActive] = useState("");

  /* Shrink navbar + highlight active section on scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    close();
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo */}
      <a className={styles.title} href="/" onClick={close}>
        Farzan<span className={styles.dot}>.</span>
        <span className={styles.statusDot}></span>
      </a>

      {/* Desktop links */}
      <ul className={styles.menuItems}>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.navLink} ${
                activeSection === href.replace("#", "") ? styles.active : ""
              }`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
              <span className={styles.linkUnderline}></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Resume CTA — desktop only */}
      <a
        href="/assests/resume/Farzan_Ateeque_Khan_Experence_Resume.pdf"
        download="Farzan-khan-Resume.pdf"
        className={styles.resumeBtn}
      >
        Resume ↓
      </a>

      {/* Hamburger — mobile */}
      <button
        className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={close} aria-hidden="true" />
      )}

      {/* Mobile drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileItems}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`${styles.mobileLink} ${
                  activeSection === href.replace("#", "")
                    ? styles.mobileActive
                    : ""
                }`}
                onClick={(e) => {
                  handleNavClick(e, href);
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/assests/resume/Farzan_Ateeque_Khan_Experence_Resume.pdf"
          download="Farzan-khan-Resume.pdf"
          className={styles.mobileResume}
          onClick={close}
        >
          Download Resume ↓
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
