import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://live-chat-wzeb.onrender.com",
  withCredentials: true,
});

export default axiosInstance;
