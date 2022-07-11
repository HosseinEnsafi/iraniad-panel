import { useState } from "react";
import { UIContext } from "./UIContext";

const UIProvider = (props) => {
  const [adminTheme, setAdminTheme] = useState("Dark");
  const [userTheme, setUserTheme] = useState("Light");
  const [activeMenu, setActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);
  return (
    <UIContext.Provider
      value={{
        activeMenu,
        adminTheme,
        userTheme,
        screenSize,
        setScreenSize,
        setAdminTheme,
        setUserTheme,
        setActiveMenu,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIProvider;
