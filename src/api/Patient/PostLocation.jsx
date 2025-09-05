
import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostLocation = (info) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/UpdatePatientProfileLocation`,info)
      .then(response => {
        resolve(response.data);
        // localStorage.setItem("patientData", JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostLocation
