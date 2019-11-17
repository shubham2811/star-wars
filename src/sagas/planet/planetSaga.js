import { getAllPlanetList } from "../../api/planetApi";
import {
  PlanetActionConstants,
  ToastrActionConstants
} from "../../common/actionConstants";
import { put, takeLatest, call } from "redux-saga/effects";

/*This function will combine all the pages response and returns all the planets List*/
export function* getAllPlanetListSaga() {
  yield takeLatest(
    PlanetActionConstants.GET_ALL_PLANET_LIST,
    getAllPlanetListData
  );
}
export function* getAllPlanetListData(action) {
  let response = null;
  try {
    response = yield call(() => {
      return getAllPlanetList(action.pageNo);
    });
    if (response.status === 200 && response.data) {
      yield put({
        type: PlanetActionConstants.GET_PLANET_RESPONSE_SUCCESS,
        payload: response.data
      });
    }
  } catch (error) {
    yield put({
      payload: {
        toastrMessage: "!!OOPS something went Wrong",
        toastrType: "error"
      },
      type: ToastrActionConstants.SHOW_TOASTR
    });
  }
}
