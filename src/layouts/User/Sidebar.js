import { useContext, useEffect, useState } from "react";
import Backdrop from "../../components/UI/Backdrop";
import { UIContext } from "../../context/UIState/UIContext";

import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { IconContext } from "../../assets/icons";
import SidebarList from "../../components/UI/sidebar/SidebarList";
import SidebarSkeleton from "./SidebarSkeleton";

function Sidebar(props) {
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } =
    useContext(UIContext);
  const [loading, setLoading] = useState(true);
  const [sidebarData, setSidebarData] = useState([]);
  useEffect(() => {
    axios
      .get("/categories", {
        params: {
          flag: "nested",
        },
      })
      .then((data) => {
        setLoading(false);
        setSidebarData(data.data.data);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize >= "1024") setActiveMenu(true);
  }, [screenSize]);

  return (
    <>
      {activeMenu && (
        <Backdrop
          onClose={() => {
            setActiveMenu(false);
          }}
          className="lg:hidden"
        />
      )}
      <aside
        className={` fixed top-0 z-10 h-screen w-60  bg-white shadow-sidebar duration-300
         dark:bg-gray-700 dark:shadow-none lg:z-0  lg:mt-12
        lg:transition-none ${activeMenu ? "translate-x-0" : "translate-x-60"}`}
      >
        <Link
          to={"/"}
          className="block select-none  items-center  justify-center border-b-[0.5px] 
          border-b-gray-400 border-opacity-20 py-2 pr-8 lg:hidden"
        >
          لوگو شرکت
        </Link>

        <IconContext.Provider value={{ size: "22px" }}>
          <div className={"pt-4 lg:pt-3"}>
            <SidebarList items={null} />
          </div>
          <div className={` mt-10`}>
            <h1 className="mb-4 px-6 text-lg">سرویس ها</h1>
            {loading && <SidebarSkeleton />}

            <SidebarList items={sidebarData} />
          </div>
        </IconContext.Provider>
      </aside>
    </>
  );
}

export default Sidebar;
