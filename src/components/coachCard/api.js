import axios from "../../utils/axios"

// ! applyForCoaching
export const applyForCoaching = async (form) => {
    try {
        const { data } = await axios.post(`/applyForCoaching`, { ...form, type: "coaching" })
        return data
    } catch (error) {
        console.log(error)
    }
}