import { useNavigate } from "react-router-dom"
import parseForm from "../../../utils/parseForm"
import * as api from "./api"
import { TOOL_ROUTE } from "../../../utils/consts"
import useAddFile from "./useAddFile"
import { useContext } from "react"
import { Context } from "../../../Context"

export default function usePost(type, id) {

    const navigate = useNavigate()

    const { pastedOrDroppedImg } = useContext(Context)
    const { fileArr } = useAddFile()

    async function addPost(e) {
        // TODO has DUP
        e.preventDefault()
        // add file: pasted/dropped
        await fileArr("upload/siteContent", pastedOrDroppedImg)
        // add post
        const form = parseForm(e)
        const res = await api.addPost(form, type)
        navigate(`/${type}/${res._id}`) // TODO path from consts ???
    }

    async function editPost(e) {
        // TODO has DUP
        e.preventDefault()
        // add file: pasted/dropped
        await fileArr("upload/siteContent", pastedOrDroppedImg)
        // add post
        const form = parseForm(e)
        const res = await api.editPost(form, type, id)
        navigate(`/${type}/${res._id}`) // TODO path from consts ???
    }

    return (
        { addPost, editPost }
    )
}
