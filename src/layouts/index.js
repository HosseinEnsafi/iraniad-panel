import React, { useContext, useEffect } from "react";
import { Routes } from "react-router-dom";
import { UIContext } from "../context/UIState/UIContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  const { currentTheme, setCurrentTheme } = useContext(UIContext);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme");
    if (currentThemeColor) setCurrentTheme(currentThemeColor);
  }, []);

  return (
    <div className={`${currentTheme === "Dark" ? "dark" : ""} `}>
      <div className="text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
        <Navbar />
        <Sidebar />

        <main className="min-h-screen flex-grow bg-white pt-16 dark:bg-neutral-800 ">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
