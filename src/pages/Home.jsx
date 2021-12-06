import React, { useEffect, useRef,useContext } from "react";
import styles from "../styles/Home.module.css";
import manImg from "../assets/manOnTable.svg";
import { init } from "ityped";
import {
  GitHub,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { Button } from "../components";
import { Link } from "react-router-dom";
import MenuLinkContext from "../contexts/MenuLinkContext";


const Home = () => {
  const textRef = useRef();
  const { _, setActiveLink } = useContext(MenuLinkContext);

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full stack developer", "tech writer", "freelancer"],
    });
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={manImg} alt="homepic" />
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h3>Hi there, I'm </h3>
          <h1>Yaya Usman</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
          <div className={styles.socials}>
            <a href="#github" className={styles.socialIcon}>
              <GitHub />
            </a>
            <a href="#linkedin" className={styles.socialIcon}>
              <LinkedIn />
            </a>
            <a href="#gmail" className={styles.socialIcon}>
              <Google />
            </a>
            <a href="#twitter" className={styles.socialIcon}>
              <Twitter />
            </a>
            <a href="#instagram" className={styles.socialIcon}>
              <Instagram />
            </a>
          </div>
          <a href="#resume" style ={{marginRight: '15px'}}>
            <Button btnText = "see resume"/>
          </a>
          <Link to = "/contact" onClick = {() => setActiveLink(4)}>
            <Button btnText = "contact me"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
