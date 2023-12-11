import axios from "../../utils/axios"

// ! autoAuth
export const autoAuth = async (token) => {
    try {
        const { data } = await axios.post(`/autoAuth`, { token })
        return data
    } catch (error) {
        console.log(error)
    }
}