import React, { useContext } from "react";
import { UIContext } from "../../context/UIState/UIContext";

function MainLayout(props) {
  const { adminTheme } = useContext(UIContext);

  return (
    <div className={`${adminTheme === "Dark" ? "dark" : ""} `}>
      <div className=" min-h-screen bg-white text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;
