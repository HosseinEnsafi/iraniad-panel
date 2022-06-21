import React, { useContext, useEffect, useState } from "react";
import { BiListUl, BiUser, BiMoon, BiSun, BiX } from "react-icons/bi";
import { UIContext } from "../context/UIState/UIProvider";
import LoginModal from "./UI/LoginModal";

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
    <header className="fixed top-0  left-0 flex h-[50px] w-full items-center justify-between bg-white p-2 shadow-md dark:bg-[#3d3d3d] md:z-20">
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

      {openLogin && (
        <LoginModal onClick={() => setOpenLogin(false)}>
          {success ? (
            <>
              <p>Succes</p>
              <p>{data.data.firstName}</p>
              <p>{data.data.lastName}</p>
            </>
          ) : (
            <>
              <BiX
                onClick={() => setOpenLogin(false)}
                className="h-6 w-6 cursor-pointer  rounded-full bg-white text-black "
              />

              <h2 className="text-center text-lg">عضویت</h2>

              <form
                className=" mt-8 flex  flex-col items-start gap-2"
                onSubmit={LoginUserHandler}
              >
                <div className="grid w-full  max-w-lg grid-cols-[15fr_75fr]">
                  <label className="self-center">نام کاربری</label>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    className="input-login"
                    type="text"
                  />
                </div>
                <div className=" grid  w-full max-w-lg grid-cols-[15fr_75fr]">
                  <label className=" self-center">رمز کاربری </label>
                  <input
                    value={userpassword}
                    onChange={(e) => {
                      setUserpassword(e.target.value);
                    }}
                    className="input-login"
                    type="password"
                  />
                </div>
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-baseline ">
                  <button className=" roundedrop-shadow-sm mt-2  bg-cyan-400 py-1 px-3 text-white">
                    ورود
                  </button>
                  <p className="select-none">
                    نام کاربری ندارید؟{" "}
                    <span className="cursor-pointer text-blue-400">
                      {" "}
                      ثبت نام کنید
                    </span>
                  </p>
                </div>
              </form>
            </>
          )}
        </LoginModal>
      )}
    </header>
  );
}

export default Navbar;
