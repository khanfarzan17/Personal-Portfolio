import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const phoneNumber = "917631528775";
  const message = "Thanks For Contacting Farzan!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Subtle parallax on mouse move
  const imageRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!imageRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * 8;
      imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className={styles.container}>
      {/* ── Background layers ── */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.accentBlur} />
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* ── Left content ── */}
      <div className={styles.content}>
        {/* Availability badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for work
        </div>

        {/* Name */}
        <h1 className={styles.title}>
          Hi, I'm <br />
          <span className={styles.titleAccent}>Farzan Khan</span>
        </h1>

        {/* Role chips */}
        <div className={styles.roleRow}>
          <span className={styles.roleChip}>Full Stack Developer</span>
          <span className={styles.roleSep}>·</span>
          <span className={styles.roleChip}>React.js</span>
          <span className={styles.roleSep}>·</span>
          <span className={styles.roleChip}>Node.js</span>
        </div>

        <p className={styles.description}>
          Crafting responsive web applications with seamless front-end and
          back-end integration — delivering fast, dynamic, and polished user
          experiences.
        </p>

        {/* CTAs */}
        <div className={styles.btnRow}>
          <a
            href={whatsappLink}
            className={styles.contactBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.514 5.842L.057 23.5l5.797-1.522A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.003-1.368l-.36-.213-3.714.976.992-3.62-.234-.373A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Hire Me
          </a>
          <a href="#projects" className={styles.secondaryBtn}>
            View Projects
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Socials */}
        <div className={styles.socialRow}>
          {[
            {
              href: "https://github.com/khanfarzan17",
              label: "GitHub",
              path: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
            },
            {
              href: "https://www.linkedin.com/in/farzan-ateeque-khan-6a9669236/",
              label: "LinkedIn",
              path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            },
          ].map(({ href, label, path }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label={label}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={path} />
              </svg>
            </a>
          ))}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="WhatsApp"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.514 5.842L.057 23.5l5.797-1.522A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 01-5.003-1.368l-.36-.213-3.714.976.992-3.62-.234-.373A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
          </a>

          <a
            href="mailto:khanfarzan200@gmail.com"
            className={styles.socialIcon}
            aria-label="Email"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
          </a>

          {/* Vertical divider */}
          <div className={styles.socialDivider} aria-hidden="true" />

          {/* Resume shortcut */}
          <a
            href="/assests/resume/Farzan_Ateeque_Khan_Experence_Resume.pdf"
            download="Farzan-Khan-Resume.pdf"
            className={styles.socialResume}
            aria-label="Download resume"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume
          </a>
        </div>

        {/* Stats */}
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.statNum}>
              2.5<span className={styles.statAccent}>+</span>
            </span>
            <span className={styles.statLabel}>Years Exp.</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>
              9<span className={styles.statAccent}>+</span>
            </span>
            <span className={styles.statLabel}>Projects</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>
              2<span className={styles.statAccent}>+</span>
            </span>
            <span className={styles.statLabel}>Certifications</span>
          </div>
        </div>
      </div>

      {/* ── Right — image ── */}
      <div className={styles.imageWrapper}>
        <div className={styles.imageGlow} />

        {/* Orbit ring */}
        <div className={styles.orbitRing} aria-hidden="true" />

        {/* Corner tech badges */}
        <div
          className={`${styles.techBadge} ${styles.techBadge1}`}
          aria-hidden="true"
        >
          React.js
        </div>
        <div
          className={`${styles.techBadge} ${styles.techBadge2}`}
          aria-hidden="true"
        >
          Node.js
        </div>
        <div
          className={`${styles.techBadge} ${styles.techBadge3}`}
          aria-hidden="true"
        >
          AWS
        </div>

        <div className={styles.avatarFrame} ref={imageRef}>
          <img
            src="/assests/hero/farzanpicture.png"
            alt="Profile picture of Farzan Khan"
            className={styles.heroImage}
            loading="eager"
          />
          {/* Inner shimmer overlay */}
          <div className={styles.avatarShimmer} aria-hidden="true" />
        </div>

        {/* Experience card */}
        <div className={styles.floatingCard}>
          <div className={styles.floatingCardIcon}>⚡</div>
          <div>
            <div className={styles.floatingCardNum}>2.5+</div>
            <div className={styles.floatingCardLabel}>Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
