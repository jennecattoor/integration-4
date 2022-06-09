import * as React from "react";
import * as styles from "./arduino.module.scss";

const Arduino = () => {
  return (
    <div className={styles.wrapper}>
      <iframe className={styles.video} width="800" height="400" src="https://www.youtube.com/embed/DRG4LpizG4M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
};

export default Arduino;
