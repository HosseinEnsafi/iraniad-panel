import { useContext, useEffect, useState } from "react";
import Backdrop from "../../components/UI/Backdrop";
import { UIContext } from "../../context/UIState/UIContext";

import { IconContext } from "../../assets/icons";
import { Link } from "react-router-dom";
import SidebarList from "../../components/UI/sidebar/SidebarList";
function Sidebar(props) {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useContext(UIContext);

  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize >= "1024") setActiveMenu(true);
  }, [screenSize, setActiveMenu]);

  return (
    <>
      {activeMenu && (
        <Backdrop
          onClose={() => {
            setActiveMenu(false);
          }}
          className={`${screenSize > 1024 ? "hidden" : ""}`}
        />
      )}
      <aside
        className={`fixed top-0 h-screen w-60   bg-gray-50   ${
          screenSize < 1024 ? "z-10 duration-300" : ""
        } dark:bg-[#3d3d3d]   ${screenSize > 1024 ? "mt-12" : ""} ${
          activeMenu ? "translate-x-0" : "translate-x-60"
        }`}
      >
        {/* <!--===== TOP =====--> */}

        <Link
          to={"/"}
          className={`block select-none items-center  justify-center  py-2 pr-8 ${
            screenSize > 1024
              ? "hidden"
              : " border-b-[0.5px] border-b-gray-400 border-opacity-20"
          }`}
        >
          لوگو شرکت
        </Link>

        {/* <!--===== MAIN =====--> */}
        <div className={` ${screenSize > 1024 ? "pt-3" : "pt-4"}`}>
          <IconContext.Provider value={{ size: "22px" }}>
            <SidebarList items={sidebarData} />
          </IconContext.Provider>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
