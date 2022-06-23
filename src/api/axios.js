import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://api.iraniad.com/representation",
});

export default axios;
