import { Home, ImportContacts, Person, Work } from "@mui/icons-material";
import styles from "../styles/Menu.module.css";

export const menuItem = [
  {
    id: 1,
    text: "Home",
    icon: <Home className={styles.icons} />,
    to: "/",
  },
  {
    id: 2,
    text: "About",
    icon: <Person className={styles.icons} />,
    to: "/about",
  },

  {
    id: 3,
    text: "Projects",
    icon: <Work className={styles.icons} />,
    to: "/projects",
  },
  {
    id: 4,
    text: "Contact",
    icon: <ImportContacts className={styles.icons} />,
    to: "/contact",
  },
];
