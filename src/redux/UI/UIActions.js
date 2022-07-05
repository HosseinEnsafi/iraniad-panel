import { CLOSE_LOGIN, OPEN_LOGIN } from "./UITypes";

const closeLogin = () => {
  return {
    type: CLOSE_LOGIN,
  };
};

const openLogin = () => {
  return {
    type: OPEN_LOGIN,
  };
};

export { openLogin, closeLogin };
