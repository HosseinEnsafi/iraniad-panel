import { useContext, useEffect } from "react";
import { UIContext } from "../../context/UIState/UIContext";
import Backdrop from "../../components/UI/Backdrop";
import SidebarList from "../../components/SidebarList";
import { sidebarAdminData } from "../../assets/data";
import { IconContext } from "react-icons/lib";

function Sidebar(props) {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useContext(UIContext);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize >= "900") setActiveMenu(true);
  }, [screenSize, setActiveMenu]);

  return (
    <>
      {activeMenu && (
        <Backdrop
          onClick={() => {
            setActiveMenu(false);
          }}
          className={`${screenSize > 900 ? "hidden" : ""}`}
        />
      )}
      <aside
        className={`fixed top-0 h-screen w-60   bg-gray-50   ${
          screenSize < 900 ? "z-10 duration-300" : ""
        } dark:bg-[#3d3d3d]   ${screenSize > 900 ? "mt-12" : ""} ${
          activeMenu ? "translate-x-0" : "translate-x-60"
        }`}
      >
        {/* <!--===== TOP =====--> */}
        <div
          className={`flex h-10 gap-2  px-3${
            screenSize > 900
              ? " hidden"
              : " border-b-[0.5px] border-b-gray-400 border-opacity-20"
          }`}
        >
          <h2 className="flex select-none items-center justify-center">
            لوگو شرکت
          </h2>
        </div>
        {/* <!--===== MAIN =====--> */}
        <div className={` ${screenSize > 900 ? "pt-3" : "pt-4"}`}>
          <IconContext.Provider value={{ size: "22px" }}>
            <SidebarList items={sidebarAdminData} />
          </IconContext.Provider>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
