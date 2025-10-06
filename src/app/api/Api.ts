import axios from "axios"

const Api = axios.create({
    baseURL: "/api"
})

export default Api;