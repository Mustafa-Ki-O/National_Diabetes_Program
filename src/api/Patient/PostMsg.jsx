import axiosInstance from "../axiosService";

// const API_URL = import.meta.env.VITE_API_URL;

const PostMsg = (msg) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post('https://mini-chat-api-ns0c.onrender.com/ask',msg)
      .then(response => {
        resolve(response.data);
        
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostMsg
