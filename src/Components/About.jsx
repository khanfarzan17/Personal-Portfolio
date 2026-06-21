import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* Section header */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Who I am</span>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.content}>
        {/* Left — image + quote */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <img
              src="/assests/about/aboutImage.png"
              alt="Farzan Khan working on a laptop"
              className={styles.aboutImage}
            />
            {/* Floating experience card */}
            <div className={styles.expCard}>
              <span className={styles.expNum}>
                2.5<span className={styles.expAccent}>+</span>
              </span>
              <span className={styles.expLabel}>
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          {/* Quote block */}
          <blockquote className={styles.quote}>
            "I build things for the web — and I care deeply about how they look,
            feel, and perform."
          </blockquote>
          <div className={styles.strengthsSection}>
            <span className={styles.sectionTag}>Strengths</span>
            <div className={styles.strengthsGrid}>
              <div className={styles.strengthCard}>
                <h3>Clean Code</h3>
                <p>
                  SOLID principles, reusable components, readable architecture.
                </p>
              </div>
              <div className={styles.strengthCard}>
                <h3>Fast Delivery</h3>
                <p>Ship MVPs quickly without compromising quality.</p>
              </div>
              <div className={styles.strengthCard}>
                <h3>UI Precision</h3>
                <p>Pixel-perfect interfaces with a strong design eye.</p>
              </div>
              <div className={styles.strengthCard}>
                <h3>Quick Learner</h3>
                <p>Adapts fast to new stacks, tools, and domains.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — bio + cards */}
        <div className={styles.rightCol}>
          <p className={styles.bio}>
            I'm a Frontend Developer with 2.5+ years of experience building
            enterprise web applications and SaaS platforms. I specialize in
            React.js, JavaScript, Redux Toolkit, and modern frontend
            architectures. Throughout my career at SLK Software and Infosys,
            I've worked with Manufacturing and Insurance domain clients,
            developing scalable applications, integrating APIs, and delivering
            high-performance user experiences that solve real business problems.
          </p>

          <ul className={styles.aboutItems}>
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
                />
              </div>
              <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>
                  Building responsive, accessible, and blazing-fast UIs with
                  React.js, Tailwind CSS, and Framer Motion.
                </p>
              </div>
              <div className={styles.itemArrow}>→</div>
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
                />
              </div>
              <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>
                  Developing fast REST APIs and backend systems with Node.js,
                  Express.js, ASP.NET Core, and MySQL.
                </p>
              </div>
              <div className={styles.itemArrow}>→</div>
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
                />
              </div>
              <div className={styles.aboutItemText}>
                <h3>UI Designer</h3>
                <p>
                  Designing polished landing pages and scalable design systems
                  with a sharp eye for detail and consistency.
                </p>
              </div>
              <div className={styles.itemArrow}>→</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
