import { PlanetActionConstants } from "../../../common/actionConstants";

/** Action method for retrieving cab list */
export const getPlanetList = () => ({
  type: PlanetActionConstants.GET_PLANET_LIST
});
// /**
//  * @description Function to get the cab list with searched value
//  */
// export const getCabsListForSearch = () => ({
//   type: PlanetActionConstants.GET_CAB_LIST_FOR_SEARCH
// });
// /**
//  * @description Function to get the cab details by cab id
//  */
// export const getCabDetails = (cabId: number) => ({
//   cabId,
//   type: PlanetActionConstants.GET_CAB_DETAILS
// });

// /**
//  * @description Action method to post Edit Cab data
//  */
// export const putCabData = (cabData, id: number) => ({
//   id,
//   cabData,
//   type: CabActionConstants.PUT_CAB_DETAILS
// });

// /**
//  * @description Action method to delete Cab data
//  */
// export const deleteCab = cabId => ({
//   cabId,
//   type: CabActionConstants.DELETE_CAB
// });
