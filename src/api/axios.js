import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.iraniad.com/representation",
});

<<<<<<< HEAD
=======
Axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
export default axios;
