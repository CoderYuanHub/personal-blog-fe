import Request from "./request";
import { baseURL } from "./config";

export default new Request({
  baseURL,
  interceptors: {
    requestInterceptor: config => {
      return config;
    },
    requestInterceptorCatch: error => {
      return error;
    },
    responseInterceptor: res => {
      return res.data;
    },
    responseInterceptorCatch: error => {
      return error;
    }
  }
});
