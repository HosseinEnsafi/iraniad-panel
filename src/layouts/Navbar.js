import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
import { BiListUl, BiUser, BiMoon, BiSun, BiX } from "react-icons/bi";
import { UIContext } from "../context/UIState/UIContext";
import LoginModal from "../components/UI/LoginModal/LoginModal";
=======
import { BiListUl, BiUser, BiMoon, BiSun, BiAlignMiddle } from "react-icons/bi";
import { UIContext } from "../context/UIState/UIContext";
import LoginModal from "../components/UI/LoginModal/LoginModal";
import { useSelector } from "react-redux";
import UserProfile from "../components/UI/UserProfile";
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552

function Navbar() {
  const {
    currentTheme,
    openLogin,
    setOpenLogin,
    setCurrentTheme,
    setActiveMenu,
  } = useContext(UIContext);

<<<<<<< HEAD
  const [initialLoad, setInitialLoad] = useState(true);
 
=======
  const { user } = useSelector((state) => state.auth);

  const [initialLoad, setInitialLoad] = useState(true);

>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

<<<<<<< HEAD
  

  return (
    <header className="fixed top-0  left-0 flex h-[50px] w-full items-center justify-between bg-white p-2 shadow-md dark:bg-[#3d3d3d] md:z-10">
=======
  return (
    <header className="fixed top-0  left-0 flex h-[50px] w-full items-center justify-between bg-white p-2 shadow-md dark:bg-[#3d3d3d] md:z-10 md:pl-12">
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
      <div className=" flex items-center gap-3">
        <button
          onClick={() => setActiveMenu((prevState) => !prevState)}
          className="hoverAnimation h-10 w-10"
        >
<<<<<<< HEAD
          <BiListUl className=" h-full w-full " />
        </button>
        <h2>لوگو شرکت</h2>
      </div>
      <div className="flex">
=======
          <BiListUl className="h-full w-full" />
        </button>
        <h2>لوگو شرکت</h2>
      </div>
      <div className="flex items-center gap-1">
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
        <button
          className="hoverAnimation flex h-10 w-10 items-center justify-center text-gray-500"
          onClick={() => {
            setCurrentTheme(currentTheme === "Dark" ? "Light" : "Dark");
          }}
        >
          {currentTheme === "Dark" && <BiMoon className="h-full w-full" />}
          {currentTheme === "Light" && <BiSun className="h-full w-full" />}
        </button>

<<<<<<< HEAD
        <div className="hoverAnimation flex h-10 w-10 items-center text-gray-500">
          <BiUser
            onClick={() => setOpenLogin((prevState) => !prevState)}
            className="h-full w-full"
          />
        </div>
      </div>

      {openLogin && <LoginModal />}
=======
        {!user ? (
          <div className="hoverAnimation flex h-10 w-10 items-center text-gray-500">
            <BiUser
              onClick={() => setOpenLogin((prevState) => !prevState)}
              className="h-full w-full"
            />
          </div>
        ) : (
          <UserProfile />
        )}
      </div>

      {openLogin && !user && <LoginModal />}
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
    </header>
  );
}

export default Navbar;
