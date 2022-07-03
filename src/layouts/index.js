import React, { useContext } from "react";
import { UIContext } from "../context/UIState/UIContext";

function MainLayout(props) {
  const { currentTheme } = useContext(UIContext);

  return (
    <div className={`${currentTheme === "Dark" ? "dark" : ""} `}>
      <div className="text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;
