import React, { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.css";
import skillsData from "../Data/Skills.json";
import { FaReact, FaServer, FaCloud } from "react-icons/fa";
import LazyImage from "./LazyImage";
import ScrollFadeIn from "./ScrollFadeIn";

/* ── Icon lookup ──────────────────────────────────────────────── */
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
  skillsData.map((s) => [normalizeTitle(s.title), s.imgesrc]),
);

const findSkillIcon = (name) => {
  const n = normalizeTitle(name);
  if (skillIconMap[n]) return skillIconMap[n];
  const matchers = [
    ["html", "html"],
    ["css", "css"],
    ["javascript", "javascript"],
    ["react", "reactjs"],
    ["redux", "redux"],
    ["bootstrap", "bootstrap"],
    ["tailwind", "tailwind"],
    ["node", "nodejs"],
    ["express", "expressjs"],
    ["mysql", "mysql"],
    ["mongodb", "mongodb"],
    ["aws", "aws"],
    ["github", "github"],
    ["postman", "postman"],
    ["chat", "chatgpt"],
    ["mui", "mui"],
  ];
  for (const [key, val] of matchers) {
    if (n.includes(key)) return skillIconMap[val] ?? null;
  }
  return null;
};

/* ── Category data ────────────────────────────────────────────── */
const skillCategories = [
  {
    title: "Frontend Engineering",
    color: "#6EE7B7",
    bg: "rgba(110,231,183,0.08)",
    border: "rgba(110,231,183,0.18)",
    icon: <FaReact />,
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "TypeScript", level: 80 },
      { name: "Redux Toolkit", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
      { name: "Material UI", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 85 },
    ],
  },

  {
    title: "Backend & APIs",
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.18)",
    icon: <FaServer />,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "REST APIs", level: 80 },
      { name: "MongoDB", level: 65 },
      { name: "MySQL", level: 72 },
    ],
  },

  {
    title: "Cloud, Tools & DevOps",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.18)",
    icon: <FaCloud />,
    skills: [
      { name: "AWS", level: 60 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 82 },
      { name: "CI/CD Basics", level: 65 },
    ],
  },
];

/* ── Animated bar component ───────────────────────────────────── */
const SkillBar = ({ level, color, inView }) => {
  return (
    <div className={styles.barTrack}>
      <div
        className={styles.barFill}
        style={{
          width: inView ? `${level}%` : "0%",
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          transition: inView
            ? "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)"
            : "none",
        }}
      />
      {/* Glow tip */}
      {inView && (
        <div
          className={styles.barGlow}
          style={{ left: `${level}%`, background: color }}
        />
      )}
    </div>
  );
};

/* ── Main component ───────────────────────────────────────────── */
const Skills = () => {
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);

  /* Trigger bar animations when section scrolls into view */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const cardSkills = new Set(
    skillCategories.flatMap((category) =>
      category.skills.map((skill) => normalizeTitle(skill.name)),
    ),
  );

  const extraSkills = skillsData.filter(
    (skill) => !cardSkills.has(normalizeTitle(skill.title)),
  );

  return (
    <section className={styles.container} id="skills" ref={sectionRef}>
      {/* ── Section header ── */}
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>Technical Skills</span>
        <h2 className={styles.title}>What I work with</h2>
        <div className={styles.titleLine} />
      </div>

      {/* ── Summary chips ── */}
      <div className={styles.summaryRow}>
        {skillCategories.map((cat) => (
          <button
            key={cat.title}
            className={`${styles.summaryChip} ${active === cat.title ? styles.summaryChipActive : ""}`}
            style={
              active === cat.title
                ? {
                    borderColor: cat.color,
                    color: cat.color,
                    background: cat.bg,
                  }
                : {}
            }
            onClick={() => setActive(active === cat.title ? null : cat.title)}
          >
            <span
              className={styles.summaryChipDot}
              style={{ background: cat.color }}
            />
            {cat.title}
            <span
              className={styles.summaryChipCount}
              style={{ color: cat.color }}
            >
              {cat.skills.length}
            </span>
          </button>
        ))}
        <span className={styles.summaryTotal}>
          {skillCategories.reduce((a, c) => a + c.skills.length, 0)} skills
          total
        </span>
      </div>

      {/* ── Cards grid ── */}
      <div className={styles.skillsGrid}>
        {skillCategories
          .filter((c) => !active || c.title === active)
          .map((category, idx) => (
            <ScrollFadeIn
              key={category.title}
              direction="up"
              delay={idx * 0.1}
              duration={0.6}
            >
              <div
                className={styles.skillCard}
                style={{
                  "--cat-color": category.color,
                  "--cat-bg": category.bg,
                  "--cat-border": category.border,
                }}
              >
                {/* Left accent bar */}
                <div
                  className={styles.cardAccentBar}
                  style={{ background: category.color }}
                />

                {/* Card header */}
                <div className={styles.cardHeader}>
                  <div
                    className={styles.iconWrap}
                    style={{
                      background: category.bg,
                      border: `0.5px solid ${category.border}`,
                      color: category.color,
                    }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3
                      className={styles.cardTitle}
                      style={{ color: category.color }}
                    >
                      {category.title}
                    </h3>
                    <span className={styles.cardSubtitle}>
                      {category.skills.length} technologies
                    </span>
                  </div>
                  {/* Avg proficiency badge */}
                  <div
                    className={styles.avgBadge}
                    style={{
                      color: category.color,
                      background: category.bg,
                      border: `0.5px solid ${category.border}`,
                    }}
                  >
                    {Math.round(
                      category.skills.reduce((a, s) => a + s.level, 0) /
                        category.skills.length,
                    )}
                    % avg
                  </div>
                </div>

                {/* Skill rows */}
                <div className={styles.skillList}>
                  {category.skills.map((skill, i) => {
                    const iconSrc = findSkillIcon(skill.name);
                    return (
                      <div
                        key={skill.name}
                        className={styles.skillItem}
                        style={{ animationDelay: `${i * 0.06}s` }}
                      >
                        <div className={styles.skillTop}>
                          <div className={styles.skillLabel}>
                            {iconSrc ? (
                              <div className={styles.skillIconWrap}>
                                <LazyImage
                                  src={`/${iconSrc}`}
                                  alt={`${skill.name} logo`}
                                  className={styles.skillIcon}
                                />
                              </div>
                            ) : (
                              <div
                                className={styles.skillIconWrap}
                                style={{ background: category.bg }}
                              >
                                <span
                                  className={styles.skillInitial}
                                  style={{ color: category.color }}
                                >
                                  {skill.name[0]}
                                </span>
                              </div>
                            )}
                            <span className={styles.skillName}>
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={styles.skillPct}
                            style={{ color: category.color }}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        <SkillBar
                          level={skill.level}
                          color={category.color}
                          inView={inView}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollFadeIn>
          ))}
      </div>

      {/* ── Bottom tech logo strip ── */}
      {/* <div className={styles.logoStrip}>
        <p className={styles.logoStripLabel}>Also experienced with</p>
        <div className={styles.logoRow}>
          {extraSkills.map((s) => (
            <div key={s.title} className={styles.logoItem} title={s.title}>
              <img
                src={`/${s.imgesrc}`}
                alt={s.title}
                className={styles.logoImg}
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Skills;
