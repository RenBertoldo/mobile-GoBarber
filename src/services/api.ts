import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.86:3333',
});

export default api;

// use adb reverse tcp:3333 tcp:3333 usando Android Studio
