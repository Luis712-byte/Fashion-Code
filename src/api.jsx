import axios from "axios";

const isHttps = window.location.protocol === "https:";


const API_HTTP = process.env.REACT_APP_GATEWAY_HTTP;
const API_HTTPS = process.env.REACT_APP_GATEWAY_HTTPS;

const API_URL = `${isHttps ? "https" : "http"}://${isHttps ? API_HTTPS : API_HTTP}`;

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

// api.interceptors.request.use((config) => {
//     console.log("Interceptado Request:", config);
//     return config;
//   });


api.interceptors.response.use(
  (response) => {
    // console.log("Interceptado Response:", response);
    return response;
  },
  (error) => {
    console.error("Error en la petición:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);


export default api;
