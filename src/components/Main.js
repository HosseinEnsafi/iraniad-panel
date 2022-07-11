import React, { useContext } from "react";
import { UIContext } from "../context/UIState/UIContext";

function Main(props) {
  const { screenSize, activeMenu } = useContext(UIContext);
  return (
    <main
      className={`   container mx-auto px-3 pt-20
        ${screenSize > 900 && activeMenu ? "pr-60" : ""}`}
    >
      {props.children}
    </main>
  );
}

export default Main;
