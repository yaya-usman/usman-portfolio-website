import { createContext, useState } from "react";

const ModalPropsContext = createContext();
export const ModalPropsProvider = ({ children }) => {
  const [modalProps,setModalProps] = useState({
      img: "",
      title: ""
  });
  return (
    <ModalPropsContext.Provider value={{ modalProps, setModalProps}}>
      {children}
    </ModalPropsContext.Provider>
  );
};

export default ModalPropsContext;
