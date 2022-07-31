import React, { useContext } from "react";
import { useEffect } from "react";
import { UIContext } from "../../context/UIState/UIContext";

function MainLayout(props) {
  const { userTheme } = useContext(UIContext);
  const body = document.querySelector("body");

  useEffect(() => {
    body.classList.toggle("dark", userTheme === "Dark");
  }, [userTheme]);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-neutral-800 dark:bg-gray-900 dark:text-slate-50 ">
      {props.children}
    </div>
  );
}

export default MainLayout;
