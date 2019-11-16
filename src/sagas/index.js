import { all } from "redux-saga/effects";
import { getPlanetListSaga } from "./planet/planetSaga";
import { loginSaga } from "./login/loginSaga";
export default function* rootSaga() {
  yield all([getPlanetListSaga(), loginSaga()]);
}
