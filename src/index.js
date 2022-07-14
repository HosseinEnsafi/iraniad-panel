import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import App from "./App";
import UIProvider from "./context/UIState/UIProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./context/productState/ProductProvider";
document.title = "پنل مدیریت";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ProductProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </ProductProvider>
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
