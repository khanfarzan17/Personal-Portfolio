import { useEffect, useState } from "react";
import styles from "./CursorSpotlight.module.css";

const CursorSpotlight = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className={styles.spotlight}
      style={{
        left: `${mouse.x}px`,
        top: `${mouse.y}px`,
      }}
    />
  );
};

export default CursorSpotlight;
