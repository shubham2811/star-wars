import { all } from "redux-saga/effects";
import { getAllPlanetListSaga } from "./planet/planetSaga";
import { loginSaga } from "./login/loginSaga";
export default function* rootSaga() {
  yield all([getAllPlanetListSaga(), loginSaga()]);
}
