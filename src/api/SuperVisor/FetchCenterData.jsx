
import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function FetchCenterData(centerId){
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/aboutCenter?id=${centerId}`)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

