import axios from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000/api";

// create axios instance
const newRequest = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// interceptors to handle requests and responses
newRequest.interceptors.request.use(
  (config) => {
    // Add any request interceptors here
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

newRequest.interceptors.response.use(
  (response) => {
    // Add any response interceptors here
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);

export default newRequest;
