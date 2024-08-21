import React from "react";
import styles from "./Contact.module.css";
import MapComponent from "./MapComponent";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <MapComponent className={styles.map} />
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:khanfarzan200@gmail.com">
            <img src="/assests/contact/GMAIL.png" alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/farzan-ateeque-khan-6a9669236/">
            <img src="/assests/contact/LINKEDIN.png" alt="LinkedIn icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://x.com/farzankhan_17">
            <img src="/assests/contact/TWITTER.png" alt="X icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/farzan.khan17/">
            <img src="/assests/contact/INSTAGRAM.png" alt="Instagram icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/khanfarzan17">
            <img src="/assests/contact/GITHUB.png" alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
