import { useState } from "react";
import { UIContext } from "./UIContext";



const UIProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState("Light");
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  return (
    <UIContext.Provider
      value={{
        activeMenu,
        currentTheme,
        screenSize,
        setScreenSize,
        setCurrentTheme,
        setActiveMenu,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIProvider;
