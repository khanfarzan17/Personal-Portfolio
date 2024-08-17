import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const phoneNumber = "917631528775";
  const message = "Thanks For Contacting Farzan!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Farzan Khan</h1>
        <p className={styles.description}>
          Full Stack Developer with expertise in crafting responsive web
          applications, seamlessly integrating front-end and back-end
          technologies to deliver dynamic user experiences.
        </p>
        <a
          href={whatsappLink}
          className={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </a>
      </div>
      <img
        src="/assests/hero/profilepicture1.png"
        alt="Profile picture of Farzan Khan"
        className={styles.heroImage}
        loading="lazy"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
