import axios from "axios"
import { baseURL } from "../../utils/consts"

const instance = axios.create({
    baseURL: baseURL
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem("token")
    return config
})

// ! getPosts
export const getPosts = async (type) => {
    try {
        const { data } = await instance.post(`/getPosts`, { type })
        return data
    } catch (error) {
        console.log(error)
    }
}