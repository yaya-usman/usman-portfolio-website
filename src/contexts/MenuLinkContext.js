import { createContext, useState } from "react";

const MenuLinkContext = createContext();
export const MenuLinkProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <MenuLinkContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </MenuLinkContext.Provider>
  );
};

export default MenuLinkContext;
