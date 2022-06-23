import React, { useState, useContext, useRef, useEffect } from "react";
import { BiX } from "react-icons/bi";
import { UIContext } from "../../../context/UIState/UIProvider";
import axios from "../../../api/axios";

function LoginContent(props) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const { setOpenLogin } = useContext(UIContext);
  const phoneRef = useRef();

  const loginUserHandler = () => {
    setLoading(true);

    axios
      .post(
        "/login",
        {
          phone: userPhone,
          password: userPassword,
          domain: "https://shahin.iraniad.com",
        },
        { headers: { "Content-type": "application/json" } }
      )
      .then((res) => {
        console.log(res);
        props.onSuccessHandler(true);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            return setErrorMsg("شماره تلفن و یا نام کاربری اشتباه است  ");

          default:
            return setErrorMsg("مشکلی رخ داده لطفا با پشتیبانی در تماس باشید");
        }
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    phoneRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [userPhone, userPassword]);

  return (
    <div className={`${props.active ? "block" : "hidden"} relative`}>
      <BiX
        onClick={() => setOpenLogin(false)}
        className="h-6 w-6 cursor-pointer rounded-full bg-neutral-900 text-gray-50  "
      />

      <h2 className="text-center text-lg">عضویت</h2>

      {errorMsg ? (
        <div className="error-bx">
          <p className="error-bx__message">{errorMsg}</p>
        </div>
      ) : (
        ""
      )}

      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (loading) return;
          loginUserHandler();
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
            {loading ? "در حال بررسی ..." : "ورود"}
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
