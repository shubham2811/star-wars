import { LoginActionConstants } from "../../../common/actionConstants";

/** Action method for login into Application */
export const login = details => ({
  ...details,
  type: LoginActionConstants.LOGIN
});
/** @description /** Action method for logout into Application */

export const logout = () => ({
  type: LoginActionConstants.LOGOUT
});

export const getUserDetails = () => ({
  type: LoginActionConstants.LOGGED_IN_USER_DETAILS
});
