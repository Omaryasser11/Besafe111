import axios from "axios";

const baseUrl = axios.create({
  baseURL: "http://minamagdy-001-site1.ktempurl.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default baseUrl;
