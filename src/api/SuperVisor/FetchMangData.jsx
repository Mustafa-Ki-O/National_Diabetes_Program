
import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function FetchMangData(){
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getSuperInfo`)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

