import axios from "../../api/axios";
import {
  CLEAR_ERROR,
  LOGIN_USER_DONE,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "./authTypes";

export const loginUser = (phone, password) => {
  return (dispatch) => {
    dispatch(loginUserRequest());
    axios
      .post(
        "/login",
        {
          phone,
          password,
          domain: "https://shahin.iraniad.com",
        },
        { headers: { "Content-type": "application/json" } }
      )
      .then((res) => {
<<<<<<< HEAD
        // console.log(res);
        const user = res.data.data;
        window.localStorage.setItem("user", JSON.stringify(user));
        dispatch(loginUserSuccess(user));
=======
        const user = res.data.data;
        //prettier-ignore
        const {firstName,lastName,api_token,awatar,wallet,role,status,verify} = user;
        //prettier-ignore
        const userData = {name: `${firstName} ${lastName}`,
        api_token,awatar,wallet,role,status,verify,};

        window.localStorage.setItem("user", JSON.stringify(userData));
        dispatch(loginUserSuccess(userData));
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
      })
      .catch((err) => {
        dispatch(loginUserFailure(err.response.status));
        console.log(err);
      });
  };
};

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

<<<<<<< HEAD
export const loginUserSuccess = (user) => {
  const {
    firstName,
    lastName,
    api_token,
    avatar,
    wallet,
    role,
    status,
    verify,
  } = user;
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      firstName,
      lastName,
      api_token,
      avatar,
      wallet,
      role,
      status,
      verify,
    },
=======
export const loginUserSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
  };
};

export const loginUserFailure = (status) => {
  let errorMsg = "";

  switch (status) {
    case 401:
      errorMsg = "رمز یا نام کاربری اشتباه است";
      break;

    default:
      errorMsg = "مشکلی پیش آمده است لطفا با پشتیبانی در تماس باشید";
  }

  return {
    type: LOGIN_USER_FAILURE,
    payload: errorMsg,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  };
};
