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

    async function addOrEditPost(e) {
        e.preventDefault()
        // add file: pasted/dropped
        await fileArr("upload/siteContent", pastedOrDroppedImg)
        // add/edit post
        const form = parseForm(e)
        // alert: add image
        if (!form.textEditorValue.includes("[image]")) { alert("paste or drop at least one image"); return }
        // no id = no post => create post; has id => edit post
        const res = !id ? await api.addPost(form, type) : await api.editPost(form, type, id)
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
        { addOrEditPost, deletePost }
    )
}
