import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
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
import MainLayout from "./MainLyaout";
import Main from "../../components/Main";
function Layout({ children }) {
  const { user } = useSelector((state) => state.auth);

  const { setAdminTheme, screenSize, activeMenu } = useContext(UIContext);

  useEffect(() => {
    const adminThemeColor = localStorage.getItem("adminTheme");
    if (adminThemeColor) setAdminTheme(adminThemeColor);
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <Sidebar />
      <Sidebar />
      <Main>
        <Routes>
          <Route
            element={
              <ProtectedRoute isAllowed={user?.role.includes("OWNER")} />
            }
          >
            <Route element={<Dashboard />} index />
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
      </Main>
    </MainLayout>
  );
}

export default Layout;
