import axios from "axios";

const API_URL = `https://${process.env.REACT_APP_GATEWAY}`;

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

// api.interceptors.request.use((config) => {
//     console.log("Interceptado Request:", config);
//     return config;
//   });

  
api.interceptors.response.use(
  (response) => {
    console.log("Interceptado Response:", response);
    return response;
  },
  (error) => {
    console.error("Error en la petición:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);


export default api;
