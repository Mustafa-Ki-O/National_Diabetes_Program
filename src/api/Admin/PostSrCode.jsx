import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostSrCode = (secret_key) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/checkIsCenter`,secret_key)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default PostSrCode;