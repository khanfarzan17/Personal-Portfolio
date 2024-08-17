import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  projects: { imgSrc, title, description, technology, liveLink, githubLink },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imgSrc}
        alt={`Image of the Project ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {technology.map((tech, id) => {
          return (
            <li key={id} className={styles.skill}>
              {tech}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={liveLink} className={styles.link}>
          Demo
        </a>
        <a href={githubLink} className={styles.link}>
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
