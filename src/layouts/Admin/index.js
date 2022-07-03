import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainLayout from "..";
import { UIContext } from "../../context/UIState/UIContext";
import Dashboard from "../../pages/admin/Dashboard";
import Transaction from "../../pages/admin/Transaction";
import routes from "../../routes/AdminRoutes";
import ProtectedRoute from "../../routes/ProtectedRoute";
import AppContainer from "../AppContainer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Layout({ children }) {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
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
        className={` min-h-screen mx-auto${
          screenSize > 900 && activeMenu ? " mr-[270px]" : "mr-0"
        } max-w-7xl flex-grow bg-white px-5 pt-16 dark:bg-neutral-800 md:px-8 `}
      >
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<Transaction />} path="transaction" />
            <Route element={<div>Error 404</div>} path="*" />
          </Route>
        </Routes>
      </main>
    </MainLayout>
  );
}

export default Layout;
