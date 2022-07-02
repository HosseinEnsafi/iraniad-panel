import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
<<<<<<< HEAD
import UIReducer from "./UIReducer";

const rootReducer = combineReducers({
  ui: UIReducer,
  auth:authReducer
});

export default rootReducer;

=======

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
>>>>>>> 92ccbb6e9300ec7668d7f1ac4e89c7764a318552
