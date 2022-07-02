import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import Layout from "./layouts/Admin";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
