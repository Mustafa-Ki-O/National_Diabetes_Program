import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchVideos= () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getAllVideos`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchVideos;