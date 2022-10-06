import axios from "axios";

const isDev = process.env.NODE_ENV === "development";

const instance = axios.create({
  baseURL: isDev ? "http://localhost:3000/api" : "https://next-blog-ivory-six.vercel.app/api",
});

export default instance;
