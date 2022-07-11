import { Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/Admin";
import UserLayout from "./layouts/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
}

export default App;
