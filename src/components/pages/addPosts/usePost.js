import { useNavigate } from "react-router-dom"
import parseForm from "../../../utils/parseForm"
import useAddFile from "./useAddFile"
import { useContext } from "react"
import { Context } from "../../../Context"
import axios from "../../../utils/axios"

export default function usePost({ type, id: _id, onDoneNavigateToPost = true, onDone, addPath = "/addPost" }) {

    const navigate = useNavigate()
    const { pastedOrDroppedImg, lang } = useContext(Context)
    const { fileArr } = useAddFile()

    async function addOrEditPost(e, id) {
        e.preventDefault()
        // add file: pasted/dropped
        await fileArr("/upload/siteContent", pastedOrDroppedImg)
        // add/edit post
        let form = parseForm(e)
        form.lang = lang // add lang to post
        id = id ? id : _id // id can come from usePost(id) or from addOrEditPost(id)
        // no id = no post => create post; has id => edit post
        const res = (!id || id === "undefined") ? await axios(addPath, { ...form, type }) : await axios("/editPost", { ...form, type, id })
        onDoneNavigateToPost && navigate(`/post/${type}/${res._id}`)
        onDone?.()
    }

    async function deletePost({ e, id }) {
        e?.preventDefault()
        e?.stopPropagation()
        e?.target.closest(".toolCard")?.classList.add("delAnim")
        // !! delete file
        await axios("/deletePost", { type, id })
    }

    return (
        { addOrEditPost, deletePost }
    )
}
