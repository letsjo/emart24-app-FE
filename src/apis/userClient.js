import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userClient = axios.create({
  baseURL: "http://192.168.0.29:3001",
  // baseURL: "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
});

userClient.interceptors.request.use(
  async (config) => {
    let Token = await AsyncStorage.getItem('accessToken');
    Token = JSON.parse(Token);
    if (Token?.accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${Token.accessToken}`;
    }
    if (Token?.userId && config.data && config.method === 'post') {
      config.data['userId'] = Number(`${Token.userId}`);
    }

    return config;
  },
);
