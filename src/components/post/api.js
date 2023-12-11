import axios from "../../utils/axios"

// ! getPosts
export const getPosts = async (type) => {
    try {
        const { data } = await axios.post(`/getPosts`, { type })
        return data
    } catch (error) {
        console.log(error)
    }
}

// ! getPost
export const getPost = async (type, _id) => {
    try {
        const { data } = await axios.post(`/getPost`, { type, _id })
        return data
    } catch (error) {
        console.log(error)
    }
}