import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchCities = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getCities`)
      .then(response => {
        resolve(response.data); // Ensure this matches the API response structure
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchCities;