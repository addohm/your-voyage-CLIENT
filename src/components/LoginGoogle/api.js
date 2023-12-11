import axios from "../../utils/axios"

// ! loginGoogle
export const loginGoogle = async (email) => {
    try {
        const { data } = await axios.post(`/loginGoogle`, { email })
        return data
    } catch (error) {
        console.log(error)
    }
}