import planetReducer from "./planet/planetReducerRoot";
import loginReducer from "./login/loginReducerRoot";
import toastrReducer from "./toastr/toastrReducerRoot";
import { combineReducers } from "redux";
const commonReducer = combineReducers({
  login: loginReducer,
  planet: planetReducer,
  toastr: toastrReducer
});

export default commonReducer;
