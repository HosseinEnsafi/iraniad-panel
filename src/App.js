import { useContext, useEffect } from "react";
import { BiShow } from "react-icons/bi";
import { UIContext } from "./context/UIState/UIProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
function App() {
  const { currentTheme, setCurrentTheme } = useContext(UIContext);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme");
    if (currentThemeColor) setCurrentTheme(currentThemeColor);
  }, []);

  return (
    <div className="">
      <div className={`${currentTheme === "Dark" ? "dark" : ""} `}>
        <BrowserRouter>
          <div className="flex text-neutral-800 dark:bg-neutral-800 dark:text-slate-50">
            <Navbar />
            <Sidebar />
            <main
              className={` mt-16 min-h-screen flex-grow bg-white dark:bg-neutral-800 `}
            >
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
              </Routes>
            </main>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
