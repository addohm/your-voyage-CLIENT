import axios from "../../../utils/axios"

// ! POST
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

// ! deletePost
export const deletePost = async (type, _id) => {
    try {
        const { data } = await axios.post(`/deletePost`, { type, _id })
        return data
    } catch (error) {
        console.log(error)
    }
}
// ? POST
// ! FILE

// ! addFile
export const addFile = async (path, formData) => {
    try {
        const { data } = await axios.post(path, formData)
        return data
    } catch (error) {
        console.log(error)
    }
}