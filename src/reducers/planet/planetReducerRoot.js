import { PlanetActionConstants } from "../../common/actionConstants";
const initialState = {
  planetList: [],
  isListLoading: false
};
const planetReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlanetActionConstants.GET_PLANET_LIST:
      return { ...state, planetList: action.payload.data };
    default:
      return state;
  }
};

export default planetReducer;
