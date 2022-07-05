import { OPEN_LOGIN, CLOSE_LOGIN } from "./UITypes";

const initialState = {
  isLoginOpen: false,
};

const UIReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_LOGIN:
      return {
        ...state,
        isLoginOpen: true,
      };

    case CLOSE_LOGIN:
      return {
        ...state,
        isLoginOpen: false,
      };

    default:
      return state;
  }
};

export default UIReducer;
