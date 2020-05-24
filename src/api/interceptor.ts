import axios from "axios";

/**
  * @desc Axios global request interceptors
  * @param none
  * @return request/error object, indicating request status
  */
export const requestInterceptor = () => {
  axios.interceptors.request.use(config => {
    // Request pre-processor
    return config;
  }, error => {
    console.log(`>> Something went wrong with the request
      (from Axios global request interceptor)`);
    return Promise.reject(error);
  });
}

/**
  * @desc Axios global response interceptors
  * @param none
  * @return response/error object, indicating response status
  */
export const responseInterceptor = () => {
  axios.interceptors.response.use(res => {
    // Status code 2xx handler
    return res;
  }, error => {
    // Status codes outside 2xx handler
    console.log(`>> Something went wrong with the response
      (from Axios global response interceptor)`);
    return Promise.reject(error);
  });
}
