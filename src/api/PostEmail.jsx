import axiosInstance from './axiosService'


const API_URL = import.meta.env.VITE_API_URL;

const PostEmail = (email) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/sendEmail`,email)
      .then(response => {
        resolve(response.data);
        // localStorage.setItem("patientData", JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostEmail
