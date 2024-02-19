import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_WEATHER_URL,
});
api.interceptors.request.use((req) => {
  req.url += "&units=metric";
  return req;
});
api.interceptors.request.use((req) => {
  req.url += "&lang=ru";
  return req;
});
api.interceptors.request.use((req) => {
  req.url += "&appid=" + process.env.REACT_APP_API_WEATHER_KEY;
  return req;
});

export default api;
