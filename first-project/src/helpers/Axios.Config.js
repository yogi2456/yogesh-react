import axios from "axios";

// var BackendUrl = "http://localhost:8000/api/v1"
// if (process.env.MODE === "PRODUCTION") {
  var BackendUrl = "https://backend-practice-4.onrender.com/api/v1"
    //BackendUrl = "https://awdiz-backend-4.onrender.com/api/v1"
//}

const api = axios.create({ baseURL: BackendUrl })

export default api;