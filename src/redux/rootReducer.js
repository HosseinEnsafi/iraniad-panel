import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import UIReducer from "./UIReducer";

const rootReducer = combineReducers({
  ui: UIReducer,
  auth:authReducer
});

export default rootReducer;

