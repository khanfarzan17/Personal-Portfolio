import React from "react";
import skills from "../Data/Skills.json";
import history from "../Data/History.json";
import styles from "./Experience.module.css";
import { MdDownload } from "react-icons/md";
const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiences</h2>
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

                  <p>{`  From  ${historyItem.startDate} to ${historyItem.endDate}`}</p>
                  <p>Location {historyItem.Location} </p>
                </div>
              </li>
            );
          })}

          <a
            className={styles.link}
            href="/assests/resume/Farzan_Ateeque_Khan_Experence_Resume.pdf"
            download="Farzan-khan-Resume.pdf"
          >
            <button className={styles.Downloadbtn}>
              Download My CV <MdDownload />
            </button>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
