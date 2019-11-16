import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};
axiosInstance.interceptors.request.use(request => requestHandler(request));
const requestHandler = request => {
  if (isHandlerEnabled(request)) {
    // Modify request here
    request.headers["token"] = "test";
  }
  return request;
};

const errorHandler = error => {
  if (isHandlerEnabled(error.config)) {
    // Handle errors
  }
  return Promise.reject({ ...error });
};

const successHandler = response => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response;
};
axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);

export default axiosInstance;
