import { useNavigate } from "react-router-dom"
import parseForm from "../../../utils/parseForm"
import useAddFile from "./useAddFile"
import { useContext } from "react"
import { Context } from "../../../Context"
import usePostRequires from "./usePostRequires"
import axios from "../../../utils/axios"

export default function usePost({ type, id }) {

    const navigate = useNavigate()
    const { pastedOrDroppedImg } = useContext(Context)
    const { fileArr } = useAddFile()
    const { isAddImgRequired, isInputVisible } = usePostRequires(type)

    async function addOrEditPost(e) {
        e.preventDefault()
        // add file: pasted/dropped
        await fileArr("/upload/siteContent", pastedOrDroppedImg)
        // add/edit post
        const form = parseForm(e)
        // alert: add image
        if (isAddImgRequired && !form.textEditorValue.match(/!\[[^\]]+\]/g)) { alert("paste or drop at least one image"); return }
        // no id = no post => create post; has id => edit post
        const res = !id ? await axios("/addPost", { ...form, type }) : await axios("/editPost", { ...form, type, id })
        navigate(`/post/${type}/${res._id}`)
    }

    async function deletePost(e) {
        e.preventDefault()
        e.stopPropagation()
        e.target.closest(".toolCard").classList.add("delAnim")
        setTimeout(() => e.target.closest(".toolCard").classList.add("dn"), 1500)
        // !! delete file
        await axios("/deletePost", { type, id }) // TODO !!!
    }

    return (
        { addOrEditPost, deletePost, isInputVisible }
    )
}
