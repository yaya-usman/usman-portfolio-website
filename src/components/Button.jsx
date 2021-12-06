import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({btnText}) => {
  return <button className={styles.ctaBtn}>{btnText}</button>;
};

export default Button;
