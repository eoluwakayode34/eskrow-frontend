import axios from "axios";

export const requestInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  }
});

requestInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);


export const axiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
     "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",

   },
  // withCredentials: true
});