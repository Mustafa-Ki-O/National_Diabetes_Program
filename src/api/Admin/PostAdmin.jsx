import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostAdmin = (admin) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/centerRegister`,admin)
      .then(response => {
        resolve(response.data);
        // localStorage.setItem("adminData", JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostAdmin
