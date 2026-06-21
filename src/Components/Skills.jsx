import React from "react";
import styles from "./Skills.module.css";
import skillsData from "../Data/Skills.json";
import { FaReact, FaServer, FaCloud } from "react-icons/fa";

const normalizeTitle = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .replace(/reactjs|react/g, "reactjs")
    .replace(/nodejs|node/g, "nodejs")
    .replace(/javascript|js/g, "javascript")
    .replace(/github|git/g, "github")
    .replace(/tailwind|tailwindcss/g, "tailwind")
    .replace(/materialui|mui/g, "mui");

const skillIconMap = Object.fromEntries(
  skillsData.map((skill) => [normalizeTitle(skill.title), skill.imgesrc]),
);

const findSkillIcon = (name) => {
  const normalized = normalizeTitle(name);
  if (skillIconMap[normalized]) return skillIconMap[normalized];

  if (normalized.includes("html")) return skillIconMap["html"];
  if (normalized.includes("css")) return skillIconMap["css"];
  if (normalized.includes("javascript")) return skillIconMap["javascript"];
  if (normalized.includes("react")) return skillIconMap["reactjs"];
  if (normalized.includes("redux")) return skillIconMap["redux"];
  if (normalized.includes("bootstrap")) return skillIconMap["bootstrap"];
  if (normalized.includes("tailwind")) return skillIconMap["tailwind"];
  if (normalized.includes("node")) return skillIconMap["nodejs"];
  if (normalized.includes("express")) return skillIconMap["expressjs"];
  if (normalized.includes("mysql")) return skillIconMap["mysql"];
  if (normalized.includes("mongodb")) return skillIconMap["mongodb"];
  if (normalized.includes("aws")) return skillIconMap["aws"];
  if (normalized.includes("github")) return skillIconMap["github"];
  if (normalized.includes("postman")) return skillIconMap["postman"];
  if (normalized.includes("chat")) return skillIconMap["chatgpt"];
  if (normalized.includes("mui")) return skillIconMap["mui"];

  return null;
};

const skillCategories = [
  {
    title: "Frontend",
    color: "#6EE7B7",
    icon: <FaReact />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript ES6+", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "Bootstrap", level: 85 },
      { name: "Material UI", level: 75 },
    ],
  },
  {
    title: "Backend & DB",
    color: "#60A5FA",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "MongoDB", level: 58 },
    ],
  },
  {
    title: "Cloud & Tools",
    color: "#FBBF24",
    icon: <FaCloud />,
    skills: [
      { name: "AWS", level: 60 },
      { name: "Git / GitHub", level: 90 },
      { name: "Postman", level: 82 },
    ],
  },
];

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      {/* Section header */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Technical Skills</span>
        <h2 className={styles.title}>What I work with</h2>
        <div className={styles.titleLine}></div>
      </div>

      <div className={styles.skillsGrid}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.skillCard}>
            <div className={styles.cardHeader}>
              <div
                className={styles.iconWrap}
                style={{
                  background: `${category.color}20`,
                  color: category.color,
                }}
              >
                {category.icon}
              </div>

              <h3
                className={styles.cardTitle}
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
            </div>

            {category.skills.map((skill) => {
              const iconSrc = findSkillIcon(skill.name);
              return (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.skillTop}>
                    <div className={styles.skillLabel}>
                      {iconSrc && (
                        <img
                          src={`/${iconSrc}`}
                          alt={`${skill.name} logo`}
                          className={styles.skillIcon}
                        />
                      )}
                      <span className={styles.skillName}>{skill.name}</span>
                    </div>
                    <span className={styles.skillPct}>{skill.level}%</span>
                  </div>

                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{
                        width: `${skill.level}%`,
                        background: category.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
