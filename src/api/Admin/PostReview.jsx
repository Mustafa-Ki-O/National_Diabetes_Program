import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostReview = (formData) => {
  // console.log(formData)
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/addReviewe`,formData)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default PostReview;