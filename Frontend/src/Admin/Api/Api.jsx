import axios from "axios";

const API = axios.create({
  baseURL: "https://aaryaanetwork-1.onrender.com/api/admin",
  withCredentials: true,
});



export default API;
