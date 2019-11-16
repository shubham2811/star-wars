import {
  LoginActionConstants,
  ToastrActionConstants
} from "../../common/actionConstants";
import { put, takeLatest } from "redux-saga/effects";
export function* loginSaga() {
  yield takeLatest(LoginActionConstants.LOGIN, loginData);
}

export function* loginData(loginData) {
  console.log(loginData);
  if (
    loginData &&
    loginData.username === "Luke Skywalker" &&
    loginData.password === "19BBY"
  ) {
    yield put({
      payload: {
        toastrMessage: "Loggin Successfully",
        toastrType: "success"
      },
      type: ToastrActionConstants.SHOW_TOASTR
    });
    yield put({
      type: LoginActionConstants.LOGIN_RESPONSE_SUCCESS,
      payload: loginData
    });
  } else {
    yield put({
      payload: {
        toastrMessage: "Username or password is incorrect.Please Retry",
        toastrType: "error"
      },
      type: ToastrActionConstants.SHOW_TOASTR
    });
    yield put({ type: LoginActionConstants.LOGIN_RESPONSE_ERROR });
  }
}
