import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MainLayout from "..";
import { UIContext } from "../../context/UIState/UIContext";
import NotFound from "../../pages/404";
import Dashboard from "../../pages/admin/Dashboard";
import Orders from "../../pages/admin/Orders";
import SubmitOrder from "../../pages/admin/SubmitOrder";
import Transaction from "../../pages/admin/Transaction";
import UsersList from "../../pages/admin/UsersList";
import PricingProducts from "../../pages/admin/PricingProducts";
import Checkout from "../../pages/admin/Checkout";
import AnsweringTickets from "../../pages/admin/AnsweringTickets";
import ProtectedRoute from "../../routes/ProtectedRoute";
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
    <>
      <Navbar />
      <Sidebar />
      <main
        className={` min-h-screen mx-auto${
          screenSize > 900 && activeMenu ? " mr-[270px]" : "mr-0"
        } max-w-7xl flex-grow bg-white px-5 pt-16 dark:bg-neutral-800 md:px-8 `}
      >
        <Routes>
          <Route
            element={<ProtectedRoute isAllowed={user.role.includes("OWNER")} />}
          >
            <Route element={<Dashboard />} path="/" />
            <Route element={<Dashboard />} path="dashboard" />
            <Route element={<SubmitOrder />} path="submit-order" />
            <Route element={<Orders />} path="orders" />
            <Route element={<UsersList />} path="users-list" />
            <Route element={<Transaction />} path="transaction" />
            <Route element={<PricingProducts />} path="pricing-products" />
            <Route element={<AnsweringTickets />} path="answering-tickets" />
            <Route element={<Checkout />} path="checkout" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default Layout;
