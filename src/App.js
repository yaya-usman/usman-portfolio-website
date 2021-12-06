import React, { useContext } from "react";
import styles from "./styles/App.module.css";
import { Navbar, Menu } from "../src/components/index";
import { Home, About, Contact, Projects } from "./pages/";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ModalContext from "./contexts/ModalContext";
import ModalPropsContext from "./contexts/ModalPropsContext";
import { Modal } from "./components";

function App() {
  const { openModal, setOpenModal } = useContext(ModalContext);
  const { modalProps} = useContext(ModalPropsContext);

  return (
    <Router>
      {openModal && (
        <div className={styles.overlay} onClick={() => setOpenModal(false)}>
          <Modal img={modalProps.img} title={modalProps.title}/>
        </div>
      )}
      <div className={`${styles.app}`}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects  />} />
        </Routes>
        <Menu />
      </div>
    </Router>
  );
}

export default App;
