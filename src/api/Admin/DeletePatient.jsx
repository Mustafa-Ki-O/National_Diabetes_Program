import axiosInstance from "../axiosService";

const API_URL = import.meta.env.VITE_API_URL;

const DeletePatient = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance.delete(`${API_URL}/deletePatient/${id}`)
      .then(response => {
        resolve(response.data); 
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default DeletePatient;