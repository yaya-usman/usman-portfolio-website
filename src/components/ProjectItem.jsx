import React, { useContext } from "react";
import styles from "../styles/ProjectItem.module.css";
import ModalContext from "../contexts/ModalContext";
import ModalPropsContext from "../contexts/ModalPropsContext";

const ProjectItem = ({ id, img, title, desc, githubLink, livesite, list }) => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const {setModalProps } = useContext(ModalPropsContext);

  const handleClick = () => {
    setOpenModal(!openModal);
    setModalProps({
      img,
      title
    })
  };

  return (
    <div className={`${styles.projectItem} ${id % 2 === 0 && styles.reverse}`}>
      <div className={styles.thumbnail} onClick={handleClick}>
        <img src={img} alt={title} />
        <button>
          <i className="fas fa-search-plus"></i>
        </button>
      </div>
      <div className={styles.desc}>
        <a href={livesite} target="_blank">
          <h2>{title}</h2>
        </a>
        <p>{desc}</p>
        <ul className={styles.tech}>
          {list.map((item, idx) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className={styles.icons} target="_blank">
          <a href={githubLink}>
            <i className="fab fa-github"></i>
          </a>
          <a href={livesite} target="_blank">
            <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
