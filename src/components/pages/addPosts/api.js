import axios from "../../../utils/axios"

// ! addPost
export const addPost = async (form, type) => {
    try {
        const { data } = await axios.post(`/addPost`, { ...form, type })
        return data
    } catch (error) {
        console.log(error)
    }
}

// ! editPost
export const editPost = async (form, type, _id) => {
    try {
        const { data } = await axios.post(`/editPost`, { ...form, type, _id })
        return data
    } catch (error) {
        console.log(error)
    }
}

// ! addFile
export const addFile = async (path, formData) => {
    try {
        const { data } = await axios.post(path, formData)
        return data
    } catch (error) {
        console.log(error)
    }
}