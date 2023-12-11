import axios from "axios"
import { baseURL } from "./consts"

function _axios() {
    const instance = axios.create({
        baseURL: baseURL
    })

    instance.interceptors.request.use(config => {
        config.headers.Authorization = localStorage.getItem("token")
        return config
    })

    return instance
}

export default _axios() 