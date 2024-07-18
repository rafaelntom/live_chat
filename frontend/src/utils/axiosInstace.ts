import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://live-chat-wzeb.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
