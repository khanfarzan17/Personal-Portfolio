import React from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
