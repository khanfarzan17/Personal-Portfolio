import React from "react";
import styles from "./Education.module.css";
import {
  FaSchool,
  FaCertificate,
  FaCloud,
  FaReact,
  FaCode,
} from "react-icons/fa";

const githubUsername = "khanfarzan17";

const Education = () => {
  return (
    <section className={styles.container} id="education">
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Academic Background</span>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.eduWrap}>
        <div className={styles.sectionSubtitle}>
          Formal education that shaped my technical foundation.
        </div>

        <div className={styles.eduGrid}>
          <div className={styles.eduC}>
            <div
              className={styles.eduIco}
              style={{
                background: "rgba(110,231,183,0.12)",
                border: "0.5px solid rgba(110,231,183,0.2)",
              }}
            >
              <FaSchool />
            </div>
            <div>
              <div className={styles.eduDeg}>
                B.E. Computer Science & Engineering
              </div>
              <div className={styles.eduCol}>
                HKBK College of Engineering, Bengaluru
              </div>
              <div className={styles.eduMeta}>2019 – 2023 · CGPA 8.3 / 10</div>
            </div>
          </div>

          <div className={styles.eduC}>
            <div
              className={styles.eduIco}
              style={{
                background: "rgba(96,165,250,0.12)",
                border: "0.5px solid rgba(96,165,250,0.2)",
              }}
            >
              <FaCertificate />
            </div>
            <div>
              <div className={styles.eduDeg}>Pre-University (PUC) Science</div>
              <div className={styles.eduCol}>Karnataka State Board</div>
              <div className={styles.eduMeta}>2019 · 67%</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className={styles.sectionSubtitle}>
          Industry certifications demonstrating my cloud and development
          expertise.
        </div>

        <div className={styles.certRow}>
          <div className={styles.certC}>
            <div
              className={styles.certIc}
              style={{ background: "rgba(110,231,183,0.12)" }}
            >
              <FaCloud />
            </div>
            <div>
              <div className={styles.certName}>AWS Cloud Practitioner</div>
              <div className={styles.certIssuer}>
                Amazon Web Services · 2024
              </div>
            </div>
          </div>

          <div className={styles.certC}>
            <div
              className={styles.certIc}
              style={{ background: "rgba(110,231,183,0.12)" }}
            >
              <FaReact />
            </div>
            <div>
              <div className={styles.certName}>
                React Developer Certification
              </div>
              <div className={styles.certIssuer}>Udemy · 2022</div>
            </div>
          </div>

          {/* <div className={styles.certC}>
            <div
              className={styles.certIc}
              style={{ background: "rgba(96,165,250,0.12)" }}
            >
              <FaCode />
            </div>
            <div>
              <div className={styles.certName}>Full Stack Web Development</div>
              <div className={styles.certIssuer}>Udemy · 2021</div>
            </div>
          </div> */}
        </div>

        {/* Achievements */}
        <div className={styles.sectionSubtitle}>
          Key achievements and milestones from my learning and delivery journey.
        </div>

        <div className={styles.achGrid}>
          {/* <div className={styles.achC}>
            <div className={styles.achNum}>100+</div>
            <div className={styles.achLabel}>LeetCode Problems Solved</div>
          </div>
          <div className={styles.achC}>
            <div className={styles.achNum}>12+</div>
            <div className={styles.achLabel}>Production Apps Deployed</div>
          </div>
          <div className={styles.achC}>
            <div className={styles.achNum}>3</div>
            <div className={styles.achLabel}>Certifications Earned</div>
          </div> */}
          <div className={styles.achImgC}>
            <img
              src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=dark`}
              alt="GitHub contribution streak"
              className={styles.achImage}
            />
          </div>
          <div className={styles.achImgC}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark`}
              alt="GitHub statistics card"
              className={styles.achImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
