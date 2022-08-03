import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/Main";
import { UIContext } from "../../context/UIState/UIContext";
import NotFound from "../../pages/404";
import Profile from "../../pages/Profile";
import AmazingSuggestion from "../../pages/user/AmazingSuggestion";
import BeSeller from "../../pages/user/BeSeller";
import BestSellers from "../../pages/user/BestSellers";
import DiscountsAndSuggestion from "../../pages/user/DiscountsAndSuggestion";
import Landing from "../../pages/user/Landing";
import ProductDetail from "../../pages/user/ProductDetail";
import ProductsPage from "../../pages/user/ProductsPage";
import Support from "../../pages/user/Support";
import ProtectedRoute from "../../routes/ProtectedRoute";
import MainLayout from "./MainLayout";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
function Layout() {
  const { setUserTheme } = useContext(UIContext);
  const { user } = useSelector((state) => state.auth);
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
          <Route
            path="profile"
            element={
              <ProtectedRoute isAllowed={user}>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="best-sellers" element={<BestSellers />} />
          <Route
            path="discounts-suggestions"
            element={<DiscountsAndSuggestion />}
          />
          <Route path="be-seller" element={<BeSeller />} />
          <Route path="amazing-suggestion" element={<AmazingSuggestion />} />

          <Route path="support" element={<Support />} />
          <Route path="search" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </MainLayout>
  );
}

export default Layout;
