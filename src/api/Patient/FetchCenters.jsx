import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchCenters = (value) => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getCenters/${value}`)
      .then(response => {
        resolve(response.data); // Ensure this matches the API response structure
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchCenters;