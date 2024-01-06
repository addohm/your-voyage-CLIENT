import axios from "axios"
import { SERVER_URL } from "./consts"

async function _axios(route, obj) {
    const instance = axios.create({
        baseURL: SERVER_URL
    })

    instance.interceptors.request.use(config => {
        config.headers.Authorization = localStorage.getItem("token")
        return config
    })

    if (!route) return
    try {
        const { data } = await instance.post(route, obj)
        return data

    } catch (error) {
        console.log("AXIOS ERROR:", error)
    }
}

export default _axios