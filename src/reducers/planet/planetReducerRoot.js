import { PlanetActionConstants } from "../../common/actionConstants";
const initialState = {
  planetListByPage: [],
  isListLoading: false,
  allPlanetList: []
};
const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlanetActionConstants.GET_PLANET_RESPONSE_SUCCESS:
      return {
        ...state,
        planetListByPage: action.payload,
        allPlanetList: [...state.allPlanetList, ...action.payload.results]
      };
    default:
      return state;
  }
};

export default planetReducer;
