import React from "react";
import styles from "../styles/About.module.css";
import profileImg from "../assets/homepic.jpg";
import { Button, BreadCrumb, Experience } from "../components";

function About() {
  return (
    <div className={styles.about}>
      <BreadCrumb title="About" />
      <div className={styles.aboutContainer}>
        <div className={styles.imgContainer}>
          <img src={profileImg} alt="homepic" />
        </div>
        <div className={styles.contentWrapper}>
          <h3>
            <i class="fas fa-caret-right"></i> About Me
          </h3>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              repellendus cum deleniti error eligendi similique, aliquam
              excepturi doloremque culpa aliquid amet quos accusamus delectus
              quas odio modi. Eum, obcaecati dolorem?Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Provident, corrupti tenetur quis
              quas vitae corporis dicta qui accusantium ipsam voluptatem,
              exercitationem voluptatum animi tempora sed veniam architecto
              voluptates? Odio,Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod deleniti magni recusandae pariatur, quo
              nisi deserunt nulla eius iure atque maiores fugiat assumenda
              voluptates explicabo repudiandae sunt? Nesciunt, consequatur
              quaerat?
            </p>
            <Button btnText="see resume" />
          </div>
        </div>
      </div>
      {/* Relevant Experiences */}
      <Experience />
    </div>
  );
}

export default About;
