import { LoginActionConstants } from "../../common/actionConstants";
const initialState = {
  isLogin: false,
  username: null,
  password: null
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginActionConstants.LOGIN_RESPONSE_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        passowrd: action.payload.passowrd,
        isLogin: true
      };
    case LoginActionConstants.LOGIN_RESPONSE_ERROR:
      return {
        ...state,
        username: null,
        passowrd: null,
        isLogin: false
      };
    case LoginActionConstants.LOGOUT:
      return { ...state, username: null, passowrd: null, isLogin: false };
    default:
      return state;
  }
};

export default loginReducer;
