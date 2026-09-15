import React, { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";
import { FaChevronUp } from "react-icons/fa";

const RADIUS = 19;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;

      setVisible(scrollTop > 320);
      setProgress(pct);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const offset = CIRCUMFERENCE * (1 - progress);

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      title="Back to top"
    >
      <svg className={styles.ring} viewBox="0 0 44 44">
        <circle className={styles.ringTrack} cx="22" cy="22" r={RADIUS} />
        <circle
          className={styles.ringProgress}
          cx="22"
          cy="22"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <FaChevronUp className={styles.icon} />
    </button>
  );
};

export default ScrollToTopButton;
