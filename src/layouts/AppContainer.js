import React from "react";
import { Route, Routes } from "react-router-dom";

function AppContainer({ routes }) {
  return (
    <>
      <Routes>
        {routes.map((route, i) => {
          const { path, element } = route;
          return element && <Route key={i} path={path} element={element} />;
        })}
      </Routes>
    </>
  );
}

export default AppContainer;
