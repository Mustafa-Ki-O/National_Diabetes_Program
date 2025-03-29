
import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const UpdatePatientInfo = (patientData) => {
  return new Promise((resolve, reject) => {
    axiosInstance.patch(`${API_URL}/updatePatient`,patientData)
      .then(response => {
        resolve(response.data);
        // localStorage.setItem("adminData", JSON.stringify(response.data));
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default UpdatePatientInfo
