import axios from "axios"

export const api = axios.create({
  baseURL: "https://foodapi-eysq.onrender.com",
  withCredentials: true,
})
