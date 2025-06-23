 import axios from 'axios'

 const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
 
 const axiosInstanceDS = axios.create({
  // baseURL: "https://api.deepseek.com/v1/",  
  baseURL:'https://openrouter.ai/api/v1/',
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${DEEPSEEK_API_KEY}` // استخدم متغير بيئي
  },
});
export default axiosInstanceDS