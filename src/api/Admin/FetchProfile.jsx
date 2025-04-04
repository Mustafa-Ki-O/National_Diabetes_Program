import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchProfile = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getCenterProfile/${id}`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchProfile;