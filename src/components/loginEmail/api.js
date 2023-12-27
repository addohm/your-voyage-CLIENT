import axios from "../../utils/axios"

// ! loginSendEmail
export const loginSendEmail = async (form) => {
    try {
        const { data } = await axios.post(`/loginSendEmail`, { ...form })
        return data
    } catch (error) {
        console.log(error)
    }
}