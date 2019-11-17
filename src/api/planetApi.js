import axios from "../common/apiConfig";
export const getAllPlanetList = async pageNo => {
  return axios.get(`/planets/?page=${pageNo}`);
};
