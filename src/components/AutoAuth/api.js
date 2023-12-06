// TODO has dup
import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:5000"
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem("token")
    return config
})

// ! autoAuth
export const autoAuth = async (token) => {
    try {
        const { data } = await instance.post(`/autoAuth`, { token })
        return data
    } catch (error) {
        console.log(error)
    }
}