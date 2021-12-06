import React, { useEffect } from "react";
import styles from "../styles/TabContent.module.css";

const TabContent = ({ tabActive, setTabActive }) => {
  useEffect(() => {
    setTabActive(1);
  }, []);

  return (
    <div className={styles.timeline}>
      <div
        className={`${styles.timelineItem} ${tabActive === 1 && styles.active}`}
      >
        <span className={styles.title}>
          Software Engineering Intern <a href="#work3">@work3</a>
        </span>
        <span className={styles.date}>March 2021 - present</span>
        <ul className={styles.responsibility}>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
        </ul>
      </div>
      <div
        className={`${styles.timelineItem} ${tabActive === 2 && styles.active}`}
      >
        <span className={styles.title}>
          Frontend Developer Intern <a href="#work3">@Microsoft</a>
        </span>
        <span className={styles.date}>May 2021 - August 2021</span>
        <ul className={styles.responsibility}>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
        </ul>
      </div>
      <div className={`${styles.timelineItem} ${tabActive === 3 && styles.active}`}>
        <span className={styles.title}>
          Backend Engineer <a href="#work3">@Apple</a>
        </span>
        <span className={styles.date}>September 2021 - December 2021</span>
        <ul className={styles.responsibility}>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
        </ul>
      </div>
      <div className={`${styles.timelineItem} ${tabActive === 4 && styles.active}`}>
        <span className={styles.title}>
          Backend Engineer <a href="#work3">@Google</a>
        </span>
        <span className={styles.date}>September 2021 - December 2021</span>
        <ul className={styles.responsibility}>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisi</li>
        </ul>
      </div>
    </div>
  );
};

export default TabContent;
