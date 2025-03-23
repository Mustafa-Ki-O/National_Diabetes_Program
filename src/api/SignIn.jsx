import axiosInstance from './axiosService'

const API_URL = import.meta.env.VITE_API_URL;

export function SignIn(user){
  return new Promise((resolve, reject) => {
    axiosInstance.post(`${API_URL}/Login`,user)
      .then(response => {
        resolve(response.data);
        localStorage.setItem('user', JSON.stringify(response.data))
      })
      .catch(error => {
        reject(error);
      });
  });
};

