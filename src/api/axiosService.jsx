import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;


const axiosInstance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    "Content-Type": "application/json", // Add the JSON header globally
  },
});



axiosInstance.interceptors.request.use(
  (config) => {
    const Data = localStorage.getItem("user");
    const Token = Data
      ? JSON.parse(Data).token
      : null;

    // const patinetData = localStorage.getItem("patient");
    // const patientToken = patinetData
    //   ? JSON.parse(patinetData).toke
    //   : null;

      

    const auth = Token
      ? `Bearer ${Token}`
      : "";
    config.headers["Authorization"] = auth;
    return config;
  },
  (error) => Promise.reject(error)
);


export default axiosInstance;
