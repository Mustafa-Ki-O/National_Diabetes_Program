import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

export function AcceptReq(accReq){
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/acceptedInquiries`,accReq)
      .then(response => {
        resolve(response.data);
      
      })
      .catch(error => {
        reject(error);
      });
  });
};

