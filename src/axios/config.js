import axios from "axios";

const BaseUrl = axios.create({
    baseURL: "http://localhost:3030",
    headers:{
        "Content-Type": "application/si"
    }
});

export default BaseUrl;