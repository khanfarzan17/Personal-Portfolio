import React from "react";
import styles from "./Education.module.css";
import { FaSchool, FaCertificate, FaCloud, FaReact } from "react-icons/fa";

const githubUsername = "khanfarzan17";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      {/* ── Section header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Academic Background</span>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.titleLine} />
      </div>

      <div className={styles.eduWrap}>
        {/* ══ 01 — Formal Education ══ */}
        <div className={styles.blockLabel}>
          <span className={styles.blockNum}>01</span>
          <span className={styles.blockName}>Formal Education</span>
          <span className={styles.blockDesc}>
            Academic foundation in Computer Science &amp; Engineering.
          </span>
        </div>

        <div className={styles.eduGrid}>
          {/* B.E. */}
          <div className={styles.eduC}>
            <div
              className={styles.eduAccentBar}
              style={{ background: "#6EE7B7" }}
            />
            <div
              className={styles.eduIco}
              style={{
                background: "rgba(110,231,183,0.1)",
                border: "0.5px solid rgba(110,231,183,0.22)",
                color: "#6EE7B7",
              }}
            >
              <FaSchool />
            </div>
            <div className={styles.eduBody}>
              <span
                className={styles.eduBadge}
                style={{
                  color: "#6EE7B7",
                  background: "rgba(110,231,183,0.08)",
                  border: "0.5px solid rgba(110,231,183,0.18)",
                }}
              >
                Bachelor's Degree
              </span>
              <div className={styles.eduDeg}>
                B.E. Computer Science &amp; Engineering
              </div>
              <div className={styles.eduCol}>
                HKBK College of Engineering, Bengaluru
              </div>
              <div className={styles.eduMetaRow}>
                <span className={styles.eduChip}>
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  2019 – 2023
                </span>
                <span
                  className={styles.eduChip}
                  style={{
                    color: "#6EE7B7",
                    borderColor: "rgba(110,231,183,0.2)",
                  }}
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  CGPA 8.3 / 10
                </span>
              </div>
            </div>
          </div>

          {/* PUC */}
          <div className={styles.eduC}>
            <div
              className={styles.eduAccentBar}
              style={{ background: "#60A5FA" }}
            />
            <div
              className={styles.eduIco}
              style={{
                background: "rgba(96,165,250,0.1)",
                border: "0.5px solid rgba(96,165,250,0.22)",
                color: "#60A5FA",
              }}
            >
              <FaCertificate />
            </div>
            <div className={styles.eduBody}>
              <span
                className={styles.eduBadge}
                style={{
                  color: "#60A5FA",
                  background: "rgba(96,165,250,0.08)",
                  border: "0.5px solid rgba(96,165,250,0.18)",
                }}
              >
                12th Grade
              </span>
              <div className={styles.eduDeg}>Pre-University (PUC) Science</div>
              <div className={styles.eduCol}>Karnataka State Board</div>
              <div className={styles.eduMetaRow}>
                <span className={styles.eduChip}>
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  2019
                </span>
                <span
                  className={styles.eduChip}
                  style={{
                    color: "#60A5FA",
                    borderColor: "rgba(96,165,250,0.2)",
                  }}
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                  67%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ══ 02 — Certifications ══ */}
        <div className={styles.blockLabel}>
          <span className={styles.blockNum}>02</span>
          <span className={styles.blockName}>Certifications</span>
          <span className={styles.blockDesc}>
            Industry credentials validating cloud and development expertise.
          </span>
        </div>

        <div className={styles.certRow}>
          <div className={styles.certC}>
            <div
              className={styles.certIc}
              style={{
                background: "rgba(251,191,36,0.1)",
                border: "0.5px solid rgba(251,191,36,0.22)",
                color: "#FBBF24",
              }}
            >
              <FaCloud />
            </div>
            <div className={styles.certBody}>
              <div className={styles.certName}>AWS Cloud Practitioner</div>
              <div className={styles.certIssuer}>
                Amazon Web Services <span className={styles.certDot}>·</span>{" "}
                2024
              </div>
            </div>
            <span
              className={styles.certVerified}
              style={{
                color: "#FBBF24",
                background: "rgba(251,191,36,0.08)",
                border: "0.5px solid rgba(251,191,36,0.2)",
              }}
            >
              ✓ Verified
            </span>
          </div>

          <div className={styles.certC}>
            <div
              className={styles.certIc}
              style={{
                background: "rgba(110,231,183,0.1)",
                border: "0.5px solid rgba(110,231,183,0.22)",
                color: "#6EE7B7",
              }}
            >
              <FaReact />
            </div>
            <div className={styles.certBody}>
              <div className={styles.certName}>
                React Developer Certification
              </div>
              <div className={styles.certIssuer}>
                Udemy <span className={styles.certDot}>·</span> 2022
              </div>
            </div>
            <span
              className={styles.certVerified}
              style={{
                color: "#6EE7B7",
                background: "rgba(110,231,183,0.08)",
                border: "0.5px solid rgba(110,231,183,0.2)",
              }}
            >
              ✓ Verified
            </span>
          </div>
        </div>

        {/* ══ Stats strip ══ */}
        {/* <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>8.3</span>
            <span className={styles.statLabel}>CGPA</span>
            <span className={styles.statSub}>B.E. CSE</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>
              2<span className={styles.statAccent}>+</span>
            </span>
            <span className={styles.statLabel}>Certifications</span>
            <span className={styles.statSub}>AWS · React</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>
              12<span className={styles.statAccent}>+</span>
            </span>
            <span className={styles.statLabel}>Projects</span>
            <span className={styles.statSub}>Delivered &amp; Deployed</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Years</span>
            <span className={styles.statSub}>B.E. 2019–2023</span>
          </div>
        </div> */}

        {/* ══ 03 — GitHub activity ══ */}
        <div className={styles.blockLabel}>
          <span className={styles.blockNum}>03</span>
          <span className={styles.blockName}>GitHub Activity</span>
          <span className={styles.blockDesc}>
            Live contribution stats and open-source presence.
          </span>
        </div>

        <div className={styles.achGrid}>
          <div className={styles.achImgC}>
            <div className={styles.achImgHeader}>
              <div className={styles.achImgDots}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.achImgTitle}>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                Contribution Streak
              </span>
            </div>
            <div className={styles.achImgBody}>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=dark&hide_border=true&background=0D1117&stroke=6EE7B7&ring=6EE7B7&fire=F472B6&currStreakLabel=6EE7B7&sideLabels=9CA3AF&dates=6B7280`}
                alt="GitHub contribution streak for khanfarzan17"
                className={styles.achImage}
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.achImgC}>
            <div className={styles.achImgHeader}>
              <div className={styles.achImgDots}>
                <span />
                <span />
                <span />
              </div>
              <span className={styles.achImgTitle}>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Stats
              </span>
            </div>
            <div className={styles.achImgBody}>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_border=true&bg_color=0D1117&title_color=6EE7B7&icon_color=6EE7B7&text_color=9CA3AF`}
                alt="GitHub statistics for khanfarzan17"
                className={styles.achImage}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
