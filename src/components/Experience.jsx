import React, { useState } from "react";
import expImg from "../assets/experience.svg";
import styles from "../styles/Experience.module.css";
import { TabContent } from "../components";

const Experience = () => {
  const [tabActive, setTabActive] = useState(null);
  const tabItem = [
    {
      id: 1,
      workplace: "work3",
    },
    {
      id: 2,
      workplace: "Microsoft",
    },
    {
      id: 3,
      workplace: "Apple",
    },
    {
      id: 4,
      workplace: "Google",
    },
  ];
  const handleClick = (id) => setTabActive(id);

  return (
    <div className={styles.experience}>
      <div className={styles.leftBox}>
        <h3>
          <i class="fas fa-caret-right"></i> Relevant Experience
        </h3>
        <div className={styles.tabContainer}>
          <div className={styles.tablist}>
            {tabItem.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`${item.id === tabActive && styles.active}`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.workplace}
                </button>
              );
            })}
          </div>

          <div className={styles.tabContent}>
            <TabContent tabActive={tabActive} setTabActive={setTabActive} />
          </div>
        </div>
      </div>
      <div className={styles.rightBox}>
        <h3>
          <i class="fas fa-caret-right"></i> Skills
        </h3>
        <div className={styles.skills}>
          <div className={styles.languages}>
            <h4>languages</h4>
            <ul>
              <li>Javascript(ES6+)</li>
              <li>Typescript</li>
              <li>Html5</li>
              <li>(S)CSS</li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>Python</li>
            </ul>
          </div>
          <div className={styles.frameworks}>
            <h4>frameworks/libraries</h4>
            <li>React</li>
            <li>Redux</li>
            <li>NextJS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Mongoose</li>
          </div>
          <div className={styles.tools}>
            <h4>tools</h4>
            <li>Git/Github</li>
            <li>npm</li>
            <li>RestAPI</li>
            <li>GraphQL</li>
            <li>PostMan</li>
            <li>Firebase</li>
            <li>MongoDb(Atlas)</li>
          </div>
          <div className={styles.design}>
            <h4>design</h4>
            <li>figma</li>
            <li>balsamiq</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
