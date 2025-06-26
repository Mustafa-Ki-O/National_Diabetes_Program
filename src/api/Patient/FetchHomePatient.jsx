import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchHomePatient = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/gethomePatient`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchHomePatient;