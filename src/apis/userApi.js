import axios from "axios";

const userApi = axios.create({
  baseURL: "http://192.168.0.29:3001",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
export default userApi;
