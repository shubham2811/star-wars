import { getPlanetList } from "../../api/planetApi";
import { PlanetActionConstants } from "../../common/actionConstants";
import { put, takeLatest, call } from "redux-saga/effects";
export function* getPlanetListSaga() {
  yield takeLatest(PlanetActionConstants.GET_PLANET_LIST, getPlanetListData);
}

export function* getPlanetListData() {
  let response = yield call(() => {
    return getPlanetList();
  });
  if (!response.error) {
    yield put({
      type: PlanetActionConstants.GET_PLANET_RESPONSE_SUCCESS,
      payload: response
    });
    // yield put({
    //   payload: {
    //     toastrMessage: 'list loaded successfully',
    //     toastrType: 'success'
    //   },
    //   type: ToastrActionConstants.SHOW_TOASTR
    // });
  }
}
