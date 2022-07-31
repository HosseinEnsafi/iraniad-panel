import React, { useState, useContext, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIContext } from "../../../context/UIState/UIContext";
import { clearError, closeLogin, loginUser } from "../../../redux";
import CloseFromBtn from "../CloseFromBtn";

function LoginContent(props) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [userPhone, setUserPhone] = useState("");
  const [password, setPassword] = useState("");

  const phoneRef = useRef();

  const loginUserHandler = () => {
    dispatch(loginUser(userPhone, password));
  };

  useEffect(() => {
    phoneRef.current.focus();
  }, []);

  useEffect(() => {
    if (error) dispatch(clearError());
  }, [userPhone, password]);

  return (
    <div className={`${props.active ? "block" : "hidden"} relative`}>
      <CloseFromBtn onClose={() => dispatch(closeLogin())} />

      <h2 className="text-center text-lg">عضویت</h2>

      {error && (
        <div className="error-bx">
          <p className="error-bx__message">{error}</p>
        </div>
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
            className="login-form__input mt-2"
            type="text"
            ref={phoneRef}
          />
        </div>
        <div className="login-form__div">
          <label className=" self-center">رمز کاربری:</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="login-form__input mt-2"
            type="password"
          />
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-baseline ">
          <button
            disabled={password.length < 8 || userPhone.length !== 11}
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
