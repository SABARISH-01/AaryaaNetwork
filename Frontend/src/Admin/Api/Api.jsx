import axios from "axios";

const API = axios.create({
  baseURL: "https://aaryaanetwork-backend.onrender.com/api/admin",
  withCredentials: true,
});



export default API;
