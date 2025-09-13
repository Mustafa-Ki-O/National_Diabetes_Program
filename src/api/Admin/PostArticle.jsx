import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostArticle = (formData) => {
  // console.log(formData)
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/createArticle`,formData)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default PostArticle;