import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function RejectReq(query_id){
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/rejectInquiries`,query_id)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

