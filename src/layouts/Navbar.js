import React, { useContext, useEffect, useState } from "react";
import { BiListUl, BiUser, BiMoon, BiSun, BiX } from "react-icons/bi";
import { UIContext } from "../context/UIState/UIContext";
import LoginModal from "../components/UI/LoginModal/LoginModal";

function Navbar() {
  const {
    currentTheme,
    openLogin,
    setOpenLogin,
    setCurrentTheme,
    setActiveMenu,
  } = useContext(UIContext);

  const [initialLoad, setInitialLoad] = useState(true);
 
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  

  return (
    <header className="fixed top-0  left-0 flex h-[50px] w-full items-center justify-between bg-white p-2 shadow-md dark:bg-[#3d3d3d] md:z-10">
      <div className=" flex items-center gap-3">
        <button
          onClick={() => setActiveMenu((prevState) => !prevState)}
          className="hoverAnimation h-10 w-10"
        >
          <BiListUl className=" h-full w-full " />
        </button>
        <h2>لوگو شرکت</h2>
      </div>
      <div className="flex">
        <button
          className="hoverAnimation flex h-10 w-10 items-center justify-center text-gray-500"
          onClick={() => {
            setCurrentTheme(currentTheme === "Dark" ? "Light" : "Dark");
          }}
        >
          {currentTheme === "Dark" && <BiMoon className="h-full w-full" />}
          {currentTheme === "Light" && <BiSun className="h-full w-full" />}
        </button>

        <div className="hoverAnimation flex h-10 w-10 items-center text-gray-500">
          <BiUser
            onClick={() => setOpenLogin((prevState) => !prevState)}
            className="h-full w-full"
          />
        </div>
      </div>

      {openLogin && <LoginModal />}
    </header>
  );
}

export default Navbar;
