import React, { useContext, useEffect } from "react";
import MainLayout from "./MainLayout";
import { UIContext } from "../../context/UIState/UIContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Support from "../../pages/user/Support";
import Landing from "../../pages/user/Landing";
import NotFound from "../../pages/404";
import BestSellers from "../../pages/user/BestSellers";
import DiscountsAndSuggestion from "../../pages/user/DiscountsAndSuggestion";
import BeSeller from "../../pages/user/BeSeller";
import AmazingSuggestion from "../../pages/user/AmazingSuggestion";
import Profile from "../../pages/Profile";
import ProductsDetail from "../../pages/user/ProductsDetail";
import Main from "../../components/Main";
function Layout({ children }) {
  const { setUserTheme, screenSize, activeMenu } = useContext(UIContext);

  useEffect(() => {
    const userTheme = localStorage.getItem("userTheme");
    if (userTheme) setUserTheme(userTheme);
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <Sidebar />
      <Main>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="profile" element={<Profile />} />
          <Route path="best-sellers" element={<BestSellers />} />
          <Route
            path="discounts-suggestions"
            element={<DiscountsAndSuggestion />}
          />
          <Route path="be-seller" element={<BeSeller />} />
          <Route path="amazing-suggestion" element={<AmazingSuggestion />} />

          <Route path="support" element={<Support />} />
          <Route path="search" element={<ProductsDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </MainLayout>
  );
}

export default Layout;
