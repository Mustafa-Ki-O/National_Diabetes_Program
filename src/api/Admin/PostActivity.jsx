import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostActivity = (formData) => {
  console.log(formData)
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/createActivity`,formData)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default PostActivity;