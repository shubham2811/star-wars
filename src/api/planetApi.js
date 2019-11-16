import axios from "../common/apiConfig";
export const getPlanetList = async () => {
  return axios.get("/posts");
};
