import { Suspense, lazy } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import CursorSpotlight from "./Components/CursorSpotlight";

// Lazy load heavy components
const About = lazy(() => import("./Components/About"));
const Experience = lazy(() => import("./Components/Experience"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));
const Skills = lazy(() => import("./Components/Skills"));
const Education = lazy(() => import("./Components/Education"));

// Loading fallback component
const LazyComponentFallback = () => (
  <div style={{ minHeight: "400px", opacity: 0.5 }} />
);

const App = () => {
  return (
    <div className={styles.App}>
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <Suspense fallback={<LazyComponentFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <Education />
      </Suspense>
      <Suspense fallback={<LazyComponentFallback />}>
        <Contact />
      </Suspense>
    </div>
  );
};

export default App;
