import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchPatientProfile = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getPatientProfile`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchPatientProfile;