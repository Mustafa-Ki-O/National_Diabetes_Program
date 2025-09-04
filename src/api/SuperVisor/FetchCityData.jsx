
import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function FetchCityData(cityName){
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getCityInfo?city=${cityName}`)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

