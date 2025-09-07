

import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchSomeInfoHome = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getLastFivePatients`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchSomeInfoHome;