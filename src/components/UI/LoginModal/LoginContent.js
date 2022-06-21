import React, { useState, useContext, useRef, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { UIContext } from "../../../context/UIState/UIProvider";

function LoginContent(props) {
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setOpenLogin } = useContext(UIContext);
  const phoneRef = useRef();

  useEffect(() => {
    phoneRef.current.focus();
  }, []);

  return (
    <div
      className={`
       duration-300
      ${props.active ? "block" : "hidden"} `}
    >
      <BiX
        onClick={() => setOpenLogin(false)}
        className=" relative top-[-70px]  h-6 w-6 cursor-pointer rounded-full bg-neutral-900 text-gray-50  "
      />

      <h2 className="text-center text-lg">عضویت</h2>

      <form
        className=" mt-8 flex   flex-col items-start gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          props.onLoginHandler(userPhone, userPassword);
        }}
      >
        <div className="grid w-full  max-w-lg sm:grid-cols-[20fr_80fr]">
          <label className="self-center">شماره تلفن</label>
          <input
            value={userPhone}
            onChange={(e) => {
              setUserPhone(e.target.value);
            }}
            className="input-login"
            type="text"
            ref={phoneRef}
          />
        </div>
        <div className=" grid  w-full max-w-lg sm:grid-cols-[20fr_80fr]">
          <label className=" self-center">رمز کاربری </label>
          <input
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
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
            <span
              onClick={() => props.onGoToSlide(1)}
              className="cursor-pointer text-blue-400"
            >
              {" "}
              ثبت نام کنید
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginContent;
