import axiosInstance from './axiosService'


const API_URL = import.meta.env.VITE_API_URL;

const PostPassword= (pwd) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/resetPassword`,pwd)
      .then(response => {
        resolve(response.data);
        // localStorage.setItem("patientData", JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostPassword
