import React, { useContext, useEffect } from "react";
import { Routes } from "react-router-dom";
import { UIContext } from "../context/UIState/UIContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Layout({ children }) {
<<<<<<< HEAD
  const { currentTheme, setCurrentTheme } = useContext(UIContext);
=======
  const { currentTheme, setCurrentTheme, screenSize, activeMenu } =
    useContext(UIContext);
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme");
    if (currentThemeColor) setCurrentTheme(currentThemeColor);
  }, []);

  return (
    <div className={`${currentTheme === "Dark" ? "dark" : ""} `}>
<<<<<<< HEAD
      <div className="text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
        <Navbar />
        <Sidebar />

        <main className="min-h-screen flex-grow bg-white pt-16 dark:bg-neutral-800 ">
=======
      <div className=" text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
        <Navbar />
        <Sidebar />

        <main
          className={`min-h-screen  mx-auto${
            screenSize > 900 && activeMenu ? " mr-[270px]" : "mr-0"
          } max-w-7xl flex-grow bg-white px-5 pt-16 dark:bg-neutral-800 md:px-8 `}
        >
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
