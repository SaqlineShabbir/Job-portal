import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api/v1/',
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

//https://job-portall.onrender.com/