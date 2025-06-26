
import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostPatient = (patient) => {
  return new Promise((resolve, reject) => {
    axiosInstance.put(`${API_URL}/notifications/mark-all-read`,patient)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostPatient
