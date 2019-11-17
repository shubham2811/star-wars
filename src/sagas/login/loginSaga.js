import {
  LoginActionConstants,
  ToastrActionConstants
} from "../../common/actionConstants";
import { put, takeLatest } from "redux-saga/effects";
export function* loginSaga() {
  yield takeLatest(LoginActionConstants.LOGIN, loginData);
}

export function* loginData(loginData) {
  yield put({
    payload: {
      toastrMessage: "Login Successfully",
      toastrType: "success"
    },
    type: ToastrActionConstants.SHOW_TOASTR
  });
  yield put({
    type: LoginActionConstants.LOGIN_RESPONSE_SUCCESS,
    payload: loginData
  });
}
