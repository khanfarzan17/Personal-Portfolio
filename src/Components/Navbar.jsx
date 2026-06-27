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

  /* Scroll: glass effect + active link */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
      let current = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when drawer is open */
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
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    close();
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        {/* Logo */}
        <a className={styles.logo} href="/" onClick={close}>
          Farzan<span className={styles.dot}>.</span>
          <span className={styles.statusDot} />
        </a>

        {/* Desktop links */}
        <ul className={styles.desktopLinks}>
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {label}
                  <span className={styles.underline} />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop resume CTA */}
        <a
          href="/assests/resume/Farzan_Ateeque_Khan_Experence_Resume.pdf"
          download="Farzan-khan-Resume.pdf"
          className={styles.resumeBtn}
        >
          Resume ↓
        </a>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-drawer"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ""}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        id="mobile-drawer"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Drawer header */}
        <div className={styles.drawerHeader}>
          <span className={styles.drawerLogo}>
            Farzan<span className={styles.dot}>.</span>
          </span>
          <button
            className={styles.drawerClose}
            onClick={close}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <ul className={styles.drawerLinks}>
          {NAV_LINKS.map(({ label, href }, i) => {
            const isActive = activeSection === href.replace("#", "");
            return (
              <li key={href} style={{ "--i": i }}>
                <a
                  href={href}
                  className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ""}`}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  <span className={styles.drawerLinkNum}>0{i + 1}</span>
                  {label}
                  {isActive && <span className={styles.drawerActivePip} />}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Drawer footer */}
        <div className={styles.drawerFooter}>
          <a
            href="/assests/resume/Farzan_Ateeque_Khan_Experence_Resume.pdf"
            download="Farzan-khan-Resume.pdf"
            className={styles.drawerResume}
            onClick={close}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Resume
          </a>
          <p className={styles.drawerTagline}>Open to new opportunities</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
