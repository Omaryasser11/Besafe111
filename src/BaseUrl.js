import axios from "axios";

// Function to create Axios instance with dynamic headers
const createAxiosInstance = () => {
  // Create a function to retrieve the token from localStorage
  const getToken = () => localStorage.getItem('token');

  // Create axios instance
  const instance = axios.create({
    baseURL: "http://minamagdy-001-site1.ktempurl.com/api",
    headers: {
      Authorization: `Bearer ${getToken()}`, // Initial token from localStorage
      'Content-Type': 'application/json', // Example additional headers
    },
  });

  // Add a request interceptor to update headers dynamically
  instance.interceptors.request.use(
    config => {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance();
