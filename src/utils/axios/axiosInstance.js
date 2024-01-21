import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'https://job-portall.onrender.com/api/v1/',
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

//https://job-portall.onrender.com/