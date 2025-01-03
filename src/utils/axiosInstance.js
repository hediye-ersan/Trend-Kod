// create Axios instance
import axios from 'axios';
const token = localStorage.getItem('authToken');
const axiosInstance = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    headers: { Authorization: `${token}` } 
});

export default axiosInstance;