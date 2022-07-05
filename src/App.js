import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts";
import AdminLayout from "./layouts/Admin";
import UserLayout from "./layouts/User";


function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/*" element={<UserLayout />} />
          <Route path="admin/*" element={<AdminLayout />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
