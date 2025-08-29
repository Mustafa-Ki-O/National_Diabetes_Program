import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function FetchQueries(){
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getInquiries`)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

