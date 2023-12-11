import { useNavigate } from "react-router-dom"
import parseForm from "../../../utils/parseForm"
import * as api from "./api"
import useAddFile from "./useAddFile"
import { useContext } from "react"
import { Context } from "../../../Context"

export default function usePost(type, id) {

    const navigate = useNavigate()

    const { pastedOrDroppedImg } = useContext(Context)
    const { fileArr } = useAddFile()

    async function addPost(e) {
        e.preventDefault()
        // add file: pasted/dropped
        await fileArr("upload/siteContent", pastedOrDroppedImg)
        // add post
        const form = parseForm(e)
        const res = await api.addPost(form, type)
        navigate(`/${type}/${res._id}`)
    }

    async function editPost(e) {
        e.preventDefault()
        e.stopPropagation()
        // add file: pasted/dropped
        await fileArr("upload/siteContent", pastedOrDroppedImg)
        // add post
        const form = parseForm(e)
        const res = await api.editPost(form, type, id)
        navigate(`/${type}/${res._id}`)
    }

    async function deletePost(e) {
        e.preventDefault()
        e.stopPropagation()
        e.target.closest(".toolCard").classList.add("delAnim")
        setTimeout(() => e.target.closest(".toolCard").classList.add("dn"), 1500)
        // !! delete file
        await api.deletePost(type, id)
    }

    return (
        { addPost, editPost, deletePost }
    )
}
