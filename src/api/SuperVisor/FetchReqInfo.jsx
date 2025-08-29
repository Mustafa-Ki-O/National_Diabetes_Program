import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function FetchReqInfo(id){
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getInquiriesDetails/${id}`)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

