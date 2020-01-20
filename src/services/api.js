import axios from "axios";

const api = axios.create({
  baseURL: "https://arcane-wave-67261.herokuapp.com/"
  // baseURL: "http://localhost:3001"
});

export default api;
