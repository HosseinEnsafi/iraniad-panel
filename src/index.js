import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import App from "./App";
import UIProvider from "./context/UIState/UIProvider";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
document.title = "پنل مدیریت";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <UIProvider>
        <App />
      </UIProvider>
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
