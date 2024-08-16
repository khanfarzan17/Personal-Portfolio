import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const phoneNumber = "917631528775"; // Your WhatsApp number with country code
  const message = "Hello, I would like to connect with you!"; // Your custom message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Farzan </h1>
        <p className={styles.description}>
          I am Full Stack Developer from India{" "}
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
