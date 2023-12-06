// TODO has dup
import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:5000"
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = localStorage.getItem("token")
    return config
})

// ! loginGoogle
export const loginGoogle = async (email) => {
    try {
        const { data } = await instance.post(`/loginGoogle`, { email })
        return data
    } catch (error) {
        console.log(error)
    }
}