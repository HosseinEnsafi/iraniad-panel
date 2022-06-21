import { BiListUl } from "react-icons/bi";
import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIState/UIProvider";
import Backdrop from "./UI/Backdrop";

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
    else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  return (
    <>
      {activeMenu && (
        <Backdrop
          onClick={() => {
            setActiveMenu(false);
          }}
          className="md:hidden"
        />
      )}
      <aside
        className={`fixed top-0  h-screen w-60 bg-gray-50 py-2 pr-[12px]   ${
          screenSize < 900 ? "z-10 duration-300" : ""
        } dark:bg-[#3d3d3d]  md:mt-12  ${
          activeMenu ? "translate-x-0" : "translate-x-60"
        }`}
      >
        {/* <!--===== TOP =====--> */}
        <div className="flex gap-2 md:hidden">
          <button
            onClick={() => setActiveMenu(false)}
            className="hoverAnimation h-10 w-10"
          >
            <BiListUl className="h-full w-full" />
          </button>
          <div className="flex items-center justify-center">
            <h2 className="">لوگو شرکت</h2>
          </div>
        </div>
        {/* <!--===== MAIN =====--> */}
        <div>Hello</div>
      </aside>
    </>
  );
}

export default Sidebar;
