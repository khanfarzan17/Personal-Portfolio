import React, { useEffect } from "react";
import history from "../Data/History.json";
import styles from "./Experience.module.css";
import { MdDownload } from "react-icons/md";
const Experience = () => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${styles.historyItem}`);
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="experience">
      {/* Section header */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Work History</span>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.historyCol}>
          <ul className={styles.history}>
            {history.map((historyItem, id) => (
              <li key={id} className={styles.historyItem}>
                {/* Timeline dot + line */}
                <div className={styles.timelineMeta}>
                  <div className={styles.timelineDot}></div>
                  {id < history.length - 1 && (
                    <div className={styles.timelineLine}></div>
                  )}
                </div>

                {/* Card */}
                <div className={styles.historyCard}>
                  <div className={styles.historyCardTop}>
                    <div className={styles.orgLogoWrap}>
                      <img
                        src={historyItem.imgesrc}
                        alt={historyItem.Oraganization}
                      />
                    </div>
                    <div className={styles.historyItemDetails}>
                      <h3>{historyItem.role}</h3>
                      <span className={styles.orgName}>
                        <a
                          href={historyItem.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {historyItem.Oraganization}
                        </a>
                      </span>
                      <p className={styles.companyDesc}>
                        {historyItem.experience}
                      </p>
                      <div className={styles.metaRow}>
                        <span className={styles.metaChip}>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <path d="M16 2v4M8 2v4M3 10h18" />
                          </svg>
                          {historyItem.startDate} — {historyItem.endDate}
                        </span>
                        <span className={styles.metaChip}>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            aria-hidden="true"
                          >
                            <path d="M12 21s-8-5.6-8-12a8 8 0 1116 0c0 6.4-8 12-8 12z" />
                            <circle cx="12" cy="9" r="3" />
                          </svg>

                          {historyItem.Location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
