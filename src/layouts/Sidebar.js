<<<<<<< HEAD
import { BiListUl } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIState/UIContext";
import Backdrop from "../components/UI/Backdrop";
=======
import { BiListUl, BiX } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIState/UIContext";
import Backdrop from "../components/UI/Backdrop";
import SidebarList from "../components/SidebarList";
import { sidebarData } from "../data";
import { IconContext } from "react-icons/lib";
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552

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
<<<<<<< HEAD
    else {
      setActiveMenu(false);
    }
=======
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
  }, [screenSize]);

  return (
    <>
      {activeMenu && (
        <Backdrop
          onClick={() => {
            setActiveMenu(false);
          }}
<<<<<<< HEAD
          className="md:hidden"
        />
      )}
      <aside
        className={`fixed top-0  h-screen w-60 bg-gray-50 py-2 pr-[12px]   ${
          screenSize < 900 ? "z-10 duration-300" : ""
        } dark:bg-[#3d3d3d]  md:mt-12  ${
          activeMenu ? "translate-x-0" : "translate-x-60"
        }`}>
        {/* <!--===== TOP =====--> */}
        <div className="flex gap-2 md:hidden">
          <button
            onClick={() => setActiveMenu(false)}
            className="hoverAnimation h-10 w-10">
            <BiListUl className="h-full w-full" />
          </button>
          <div className="flex items-center justify-center">
            <h2 className="">لوگو شرکت</h2>
          </div>
        </div>
        {/* <!--===== MAIN =====--> */}
        <div>Hello</div>
=======
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
            <SidebarList items={sidebarData} />
          </IconContext.Provider>
        </div>
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
      </aside>
    </>
  );
}

export default Sidebar;
