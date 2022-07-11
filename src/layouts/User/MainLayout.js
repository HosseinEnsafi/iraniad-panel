import React, { useContext } from "react";
import { UIContext } from "../../context/UIState/UIContext";

function MainLayout(props) {
  const { userTheme } = useContext(UIContext);

  return (
    <div className={`${userTheme === "Dark" ? "dark" : ""} `}>
      <div className="min-h-screen bg-[#f8f8f8] text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
        {props.children}
      </div>
    </div>
  );
}

export default MainLayout;
