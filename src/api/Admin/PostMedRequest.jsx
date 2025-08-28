
import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostMedRequest = (formData) => {
  console.log(formData)
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/RequestMedicine`,formData)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default PostMedRequest;