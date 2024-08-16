import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Farzan </h1>
        <p className={styles.description}>
          I am Full Stack Developer from India{" "}
        </p>
        <a href="mailto:khanfarzan200@gmail.com" className={styles.contactBtn}>
          Contact me{" "}
        </a>
      </div>
      <img
        src="assests/hero/profilepicture1.png"
        alt="hero image"
        className={styles.heroImage}
      />
      <div className={styles.topblur}></div>
      <div className={styles.bottomblur}></div>
    </section>
  );
};

export default Hero;
