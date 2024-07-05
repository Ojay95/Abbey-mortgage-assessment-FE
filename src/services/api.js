import axios from "axios";

const api = axios.create({
    baseURL: "", // Replace with your backend URL
});

export default api;
