import React from "react";
import styles from "../styles/Projects.module.css";
import { BreadCrumb, ProjectItem, Button } from "../components";
import { projectContent } from "../utils/projectContent";

const Projects = () => {
  return (
    <div className={styles.projects}>
      <BreadCrumb title="Projects" />
      <h2 className={styles.heading}>
        <i class="fas fa-caret-right" style={{ marginRight: "3px" }}></i>some of my works
      </h2>
      <div className={styles.projectsContainer}>
        {projectContent.map((item, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              githubLink = {item.githubLink}
              livesite={item.livesite}
              list = {item.list}
            
            />
          );
        })}
      <a href="http://github.com/yaya-usman" className = {styles.showMore} target="_blank">
        <Button btnText="Show More" />
      </a>
      </div>
    </div>
  );
};

export default Projects;
