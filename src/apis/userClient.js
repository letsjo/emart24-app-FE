import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userClient = axios.create({
  baseURL: "http://192.168.0.29:3001",
  // baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

// Add a request interceptor
userClient.interceptors.request.use(
  (config) => {
    console.log('request success', config);
    const accessToken = AsyncStorage.getItem("access_token");

    if (accessToken && config.headers) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    // const accessToken = localStorage.getItem('access_token');

    // if (accessToken && config.headers) {
    //   config.headers['Authorization'] = `Bearer ${accessToken}`;
    // }
    return config;
  },
  (error) => {
    console.log('request error', error);
    return Promise.reject(error);
  },
);

userClient.interceptors.response.use(
  (response) => {
    console.log('response success', response);
    return response;
  },
  (error) => {
    console.log('response error', error);
    return Promise.reject(error);
  },
);
