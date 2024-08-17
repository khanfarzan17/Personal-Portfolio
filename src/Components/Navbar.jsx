import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = now.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setDateTime(formattedDateTime);
    };

    updateDateTime(); 
    const intervalId = setInterval(updateDateTime, 1000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Farzan.
      </a>
      <span className={styles.dateTime}>{dateTime}</span>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen ? "assests/nav/closeIcon.png" : "assests/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
