import axios from "axios";
import { BASE_URL } from "../constants";
import snakeToCamel from "../utils/SnakeToCamel";

axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${window.localStorage.getItem("token")}`;

// Add a request interceptor
axios.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response: any) {
    // Do something with response data
    return snakeToCamel(response);
  },
  function (error: any) {
    if (error.response.status === 401) {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token");
      window.location.href =
        window.location.protocol + "//" + window.location.host + "/login";
    }

    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
