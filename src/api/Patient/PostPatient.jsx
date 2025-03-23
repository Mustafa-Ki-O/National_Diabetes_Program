import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const PostPatient = (patient) => {
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/patientRegister`,patient)
      .then(response => {
        resolve(response.data);
        // localStorage.setItem("patientData", JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default PostPatient
