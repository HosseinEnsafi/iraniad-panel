import React, { useContext, useEffect } from "react";
import { Routes } from "react-router-dom";
import { UIContext } from "../context/UIState/UIContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  const { currentTheme, setCurrentTheme, screenSize, activeMenu } =
    useContext(UIContext);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme");
    if (currentThemeColor) setCurrentTheme(currentThemeColor);
  }, []);

  return (
    <div className={`${currentTheme === "Dark" ? "dark" : ""} `}>
      <div className=" text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
        <Navbar />
        <Sidebar />

        <main
          className={`min-h-screen  mx-auto${
            screenSize > 900 && activeMenu ? " mr-[270px]" : "mr-0"
          } max-w-7xl flex-grow bg-white px-5 pt-16 dark:bg-neutral-800 md:px-8 `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
