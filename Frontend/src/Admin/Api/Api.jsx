import axios from "axios";

const API = axios.create({
  baseURL: "https://aaryaanetwork-backend.onrender.com/api",
  withCredentials: true,
});



export default API;
