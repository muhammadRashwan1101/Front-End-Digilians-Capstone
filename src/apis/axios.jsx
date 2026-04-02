import axios from "axios";


const api = axios.create({
    baseURL: "https://back-end-digilians-capstone.onrender.com/",
})

api.interceptors.request.use((req)=> {
    const token = localStorage.getItem("token")
    if(token) {
        req.headers.authorization = `Bearer ${token}`
    }
    return req
})

export default api
