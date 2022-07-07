import Axios from "axios";
import ErrorHandler from "./ErrorHandler";
import store from "../redux/store";

const user = store.getState().auth.user;
const axios = Axios.create({
  baseURL: "https://api.iraniad.com/representation",
  headers: {
    "Content-Type": "application/json",
    // Authorization: "Bearer " + (user ? user.api_token : null),
  },
});

axios.interceptors.request.use(
  (request) => {
    const token = "Bearer " + user?.api_token;
    request.headers.Authorization = token;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorHandle = new ErrorHandler();
    errorHandle.setError(error.response).handle();
    return Promise.reject(error);
  }
);

export default axios;
