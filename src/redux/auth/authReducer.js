import {
  CLEAR_ERROR,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "./authTypes";


const initialState = {
  loading: false,
  user: JSON.parse(localStorage.getItem("user")) || null,
  error: null,
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case LOGOUT_USER:
      return {
        ...state,
      };

    default:
      return state;
  }
}
