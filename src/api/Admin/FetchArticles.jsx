import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchArticles= () => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getAllArticles`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchArticles;