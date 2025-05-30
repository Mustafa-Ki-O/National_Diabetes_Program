import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const FetchPatientReview = (rid) => {
  return new Promise((resolve, reject) => {
    axiosInstance.get(`${API_URL}/getRevieweData/${rid}`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default FetchPatientReview;