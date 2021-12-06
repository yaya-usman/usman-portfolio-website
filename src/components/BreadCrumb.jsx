import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuLinkContext from "../contexts/MenuLinkContext";
import styles from "../styles/BreadCrumb.module.css";

const BreadCrumb = ({ title }) => {
  const { _, setActiveLink } = useContext(MenuLinkContext);
  return (
    <div className={styles.breadCrumb}>
      <Link to="/" onClick={() => setActiveLink(1)}>
        Home
      </Link>
      <span style={{ margin: "0 9px" }}>{"/"}</span>
      <span style={{ color: "#11223a" }}>{title}</span>
    </div>
  );
};

export default BreadCrumb;
