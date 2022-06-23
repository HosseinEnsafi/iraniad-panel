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
    <div className={`${props.active ? "block" : "hidden"} `}>
      <BiX
        onClick={() => setOpenLogin(false)}
        className="h-6 w-6 cursor-pointer rounded-full bg-neutral-900 text-gray-50  "
      />

      <h2 className="text-center text-lg">عضویت</h2>

      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.onLoginHandler(userPhone, userPassword);
        }}
      >
        <div className="login-form__div">
          <label className="self-center">شماره تلفن:</label>
          <input
            value={userPhone}
            onChange={(e) => {
              setUserPhone(e.target.value);
            }}
            className="login-form__input"
            type="text"
            ref={phoneRef}
          />
        </div>
        <div className="login-form__div">
          <label className=" self-center">رمز کاربری:</label>
          <input
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            className="login-form__input"
            type="password"
          />
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-baseline ">
          <button
            disabled={userPassword.length < 8 || userPhone.length !== 11}
            className="login-form__btn"
          >
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
