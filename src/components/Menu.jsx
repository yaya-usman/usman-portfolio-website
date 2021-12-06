import React, { useContext, useEffect } from "react";
import styles from "../styles/Menu.module.css";
import { Link } from "react-router-dom";
import MenuLinkContext from "../contexts/MenuLinkContext";
import { menuItem } from "../utils/menuItem";
import ToggleContext from "../contexts/ToggleContext";



const Menu = () => {
  const { activeLink, setActiveLink } = useContext(MenuLinkContext);
  const {darkMode, setDarkMode} = useContext(ToggleContext)

  
  //persist the state of the menulink on page refresh
  useEffect(() => {
    setActiveLink(JSON.parse(window.sessionStorage.getItem("activeLink")));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("activeLink", activeLink);
  }, [activeLink]);

  
  const handleClick = (id) => setActiveLink(id);
  return (
    <div className={`${styles.menu} ${darkMode && styles.active}` }>
      {menuItem.map((item, idx) => {
        return (
          <Link
            to={item.to}
            key={idx}
            className={`${item.id === activeLink && styles.active}`}
            onClick={() => handleClick(item.id)}
          >
            {item.icon}
            <span>{item.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
