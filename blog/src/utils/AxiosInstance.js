import axios from "axios";

const isDev = process.env.NODE_ENV === "development";

const instance = axios.create({
  baseURL: isDev ? "http://localhost:3000/api" : "https://gratien.vercel.app",
});

export default instance;
