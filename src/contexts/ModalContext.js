import { createContext, useState } from "react";

const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <ModalContext.Provider value={{ openModal, setOpenModal}}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
