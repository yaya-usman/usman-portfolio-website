import React from "react";
import styles from "../styles/App.module.css";

const Modal = ({ img, title }) => {
  return (
    <div className={styles.modalContainer}>
      <img className={styles.modal} src={img} alt={title} />;
    </div>
  );
};

export default Modal;
