import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const allReducer = combineReducers({
  loginReducer,
});

export default allReducer;
