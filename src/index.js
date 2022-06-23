import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import App from "./App";
import UIProvider from "./context/UIState/UIProvider";
document.title = "پنل مدیریت";

ReactDOM.render(
  <UIProvider>
    <App />
  </UIProvider>,
  document.querySelector("#root")
);
