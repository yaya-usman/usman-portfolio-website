import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ToggleContext from "../contexts/ToggleContext";
import styles from "../styles/Navbar.module.css";
import MenuLinkContext from "../contexts/MenuLinkContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ToggleContext);
  const { setActiveLink } = useContext(MenuLinkContext);

  return (
    <div className={`${styles.navbar} ${darkMode && styles.active}`}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo} onClick={() => setActiveLink(1)}>
            <span>{"<"}</span>
            <span className={styles.logoname}>&nbsp;Yaya Usman&nbsp;</span>
            <span>{`/>`}</span>
          </Link>
        </div>
        <div className={styles.right}>
          <div
            className={styles.darkModeToggle}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <i class="fas fa-moon"></i>
            ) : (
              <i class="fas fa-sun"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
