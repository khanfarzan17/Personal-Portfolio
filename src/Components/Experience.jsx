import React from "react";
import skills from "../Data/Skills.json";
import history from "../Data/History.json";
import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imgesrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={historyItem.imgesrc}
                  alt={historyItem.Oraganization}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{` ${historyItem.role}, ${historyItem.Oraganization}`}</h3>

                  <p>{`  ${historyItem.startDate} to ${historyItem.endDate}`}</p>
                  <p>Location {historyItem.Location} </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
