import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const DeleteProfile = () => {
  return new Promise((resolve, reject) => {
    axiosInstance.delete(`${API_URL}/`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default DeleteProfile;