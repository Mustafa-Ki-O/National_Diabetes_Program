import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function PostDate(date){
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/CreateDatePatientFile`,date)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

