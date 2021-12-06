import { createContext, useState } from "react";

const ToggleContext = createContext();
export const ToggleProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ToggleContext.Provider value={{ darkMode, setDarkMode}}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContext;
