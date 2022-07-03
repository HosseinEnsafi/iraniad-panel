import React, { useContext, useEffect } from "react";
import MainLayout from "../index";
import { UIContext } from "../../context/UIState/UIContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Support from "../../pages/user/Support";
import Landing from "../../pages/user/Landing";
function Layout({ children }) {
  const { setCurrentTheme, screenSize, activeMenu } = useContext(UIContext);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme");
    if (currentThemeColor) setCurrentTheme(currentThemeColor);
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <Sidebar />
      <main
        className={`min-h-screen  mx-auto${
          screenSize > 900 && activeMenu ? " mr-[270px]" : "mr-0"
        } max-w-7xl flex-grow bg-white px-5 pt-16 dark:bg-neutral-800 md:px-8 `}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="support" element={<Support />} />
          <Route path="*" element={<div>Error 404</div>} />
        </Routes>
      </main>
    </MainLayout>
  );
}

export default Layout;
