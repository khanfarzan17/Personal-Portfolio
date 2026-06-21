import React, { useState } from "react";
import projects from "../Data/Projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className={styles.container}>
      {/* Section header */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>What I've built</span>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard
            key={id}
            projects={project}
            index={id}
            isHovered={hovered === id}
            onHover={() => setHovered(id)}
            onLeave={() => setHovered(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
