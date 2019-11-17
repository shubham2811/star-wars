import { PlanetActionConstants } from "../../../common/actionConstants";
/** Action method for retrieving All list */
export const getPlanetListByPage = pageNo => ({
  pageNo,
  type: PlanetActionConstants.GET_ALL_PLANET_LIST
});
