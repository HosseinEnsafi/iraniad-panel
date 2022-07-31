import React, { useContext, useEffect } from "react";
import { UIContext } from "../../context/UIState/UIContext";

function MainLayout(props) {
  const { adminTheme } = useContext(UIContext);
  //prettier-ignore
  useEffect(() => {
    document.querySelector("body").classList.toggle("dark", adminTheme === "Dark");
  }, [adminTheme]);

  return (
    <div className=" min-h-screen bg-white text-neutral-800 dark:bg-gray-900 dark:text-slate-50">
      {props.children}
    </div>
  );
}

export default MainLayout;
