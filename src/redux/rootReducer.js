import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import UIReducer from "./UI/UIReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  ui: UIReducer,
});

export default rootReducer;
