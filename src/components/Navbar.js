import React, { useContext, useEffect, useState } from "react";
import { BiListUl, BiUser, BiMoon, BiSun, BiX } from "react-icons/bi";
import { UIContext } from "../context/UIState/UIProvider";
import LoginModal from "./UI/LoginModal/LoginModal";

function Navbar() {
  const {
    currentTheme,
    openLogin,
    setOpenLogin,
    setCurrentTheme,
    setActiveMenu,
  } = useContext(UIContext);

  const [initialLoad, setInitialLoad] = useState(true);
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (initialLoad) {
      setInitialLoad(false);
      return;
    }

    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const LoginUserHandler = async (e) => {
    e.preventDefault();
    setFormLoading(true);

    const res = await fetch("https://api.iraniad.com/representation/login", {
      method: "POST",
      body: JSON.stringify({
        phone: username,
        password: userpassword,
        domain: "https://shahin.iraniad.com",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    setData(data);
    setSuccess(true);
  };

  return (
    <header className="fixed top-0  left-0 flex h-[50px] w-full items-center justify-between bg-white p-2 shadow-md dark:bg-[#3d3d3d] md:z-10">
      <div className=" flex items-center gap-3">
        <button
          onClick={() => setActiveMenu((prevState) => !prevState)}
          className="hoverAnimation h-10 w-10"
        >
          <BiListUl className="h-full w-full" />
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
