import React from "react";
import styles from "./About.module.css";
import LazyImage from "./LazyImage";
import ScrollFadeIn from "./ScrollFadeIn";

const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* ── Section header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Who I am</span>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.titleLine} />
      </div>

      {/* ── Stats row — visible on ALL screen sizes ── */}
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <span className={styles.expNum}>
            2.5<span className={styles.expAccent}>+</span>
          </span>
          <span className={styles.expLabel}>Years Experience</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.expNum}>
            12<span className={styles.expAccent}>+</span>
          </span>
          <span className={styles.expLabel}>Technologies</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.expNum}>
            10<span className={styles.expAccent}>+</span>
          </span>
          <span className={styles.expLabel}>Enterprise Features</span>
        </div>
      </div>

      <div className={styles.content}>
        {/* ══ LEFT COLUMN ══ */}
        <ScrollFadeIn direction="left" duration={0.8}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow} />
              <LazyImage
                src="/assests/about/aboutImage.png"
                alt="Farzan Khan working on a laptop"
                className={styles.aboutImage}
              />
            </div>

            {/* Quote */}
            <blockquote className={styles.quote}>
              "Transforming complex business requirements into intuitive digital
              experiences."
            </blockquote>

            {/* Strengths */}
            <div className={styles.strengthsSection}>
              <span className={styles.strengthsLabel}>Strengths</span>
              <div className={styles.strengthsGrid}>
                <div className={styles.strengthCard}>
                  <span className={styles.strengthIcon}>⚡</span>
                  <h3>Performance Optimization</h3>
                  <p>
                    Reduced render bottlenecks and improved application
                    responsiveness through profiling.
                  </p>
                </div>
                <div className={styles.strengthCard}>
                  <span className={styles.strengthIcon}>🏗️</span>
                  <h3>Scalable Architecture</h3>
                  <p>
                    Build maintainable component systems and reusable frontend
                    patterns.
                  </p>
                </div>
                <div className={styles.strengthCard}>
                  <span className={styles.strengthIcon}>🤝</span>
                  <h3>Cross-Team Collaboration</h3>
                  <p>
                    Work closely with designers, backend engineers, and
                    stakeholders.
                  </p>
                </div>
                <div className={styles.strengthCard}>
                  <span className={styles.strengthIcon}>🎯</span>
                  <h3>Business Impact</h3>
                  <p>
                    Deliver solutions aligned with product goals and real user
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* ══ RIGHT COLUMN ══ */}
        <ScrollFadeIn direction="right" duration={0.8}>
          <div className={styles.rightCol}>
            <p className={styles.bio}>
              Frontend Engineer with 2.5+ years of experience building
              enterprise-grade SaaS applications for global clients. Specialized
              in React.js, JavaScript, TypeScript, and modern frontend
              architecture with a strong focus on performance, scalability, and
              user experience. I've contributed to large-scale manufacturing and
              insurance platforms, delivering features used by thousands of
              users while collaborating closely with product managers,
              designers, and backend teams.
            </p>

            <ul className={styles.aboutItems}>
              <span className={styles.itemTag}>Core Expertise</span>

              <li className={styles.aboutItem}>
                <div
                  className={styles.iconWrap}
                  style={{
                    "--icon-color": "rgba(110,231,183,0.12)",
                    "--icon-border": "rgba(110,231,183,0.2)",
                  }}
                >
                  <img
                    src="/assests/about/cursorIcon.png"
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Frontend Engineering</h3>
                  <p>
                    Building scalable React applications with modern
                    architecture, performance optimization, and reusable
                    component systems.
                  </p>
                </div>
                <span className={styles.itemArrow} aria-hidden="true">
                  →
                </span>
              </li>

              <li className={styles.aboutItem}>
                <div
                  className={styles.iconWrap}
                  style={{
                    "--icon-color": "rgba(96,165,250,0.12)",
                    "--icon-border": "rgba(96,165,250,0.2)",
                  }}
                >
                  <img
                    src="/assests/about/serverIcon.png"
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>System Integration</h3>
                  <p>
                    Designing and integrating REST APIs, backend services, and
                    enterprise workflows across distributed systems.
                  </p>
                </div>
                <span className={styles.itemArrow} aria-hidden="true">
                  →
                </span>
              </li>

              <li className={styles.aboutItem}>
                <div
                  className={styles.iconWrap}
                  style={{
                    "--icon-color": "rgba(244,114,182,0.12)",
                    "--icon-border": "rgba(244,114,182,0.2)",
                  }}
                >
                  <img
                    src="/assests/about/uiIcon.png"
                    alt=""
                    className={styles.icon}
                    aria-hidden="true"
                    loading="lazy"
                  />
                </div>
                <div className={styles.aboutItemText}>
                  <h3>Product-Focused UI</h3>
                  <p>
                    Creating intuitive experiences that balance business goals,
                    accessibility, usability, and visual excellence.
                  </p>
                </div>
                <span className={styles.itemArrow} aria-hidden="true">
                  →
                </span>
              </li>
            </ul>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default About;
