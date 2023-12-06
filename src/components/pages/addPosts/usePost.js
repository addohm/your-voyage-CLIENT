import { useNavigate } from "react-router-dom"
import parseForm from "../../../utils/parseForm"
import * as api from "./api"
import { TOOL_ROUTE } from "../../../utils/consts"

export default function usePost() {

    const navigate = useNavigate()

    async function addPost(e) {
        e.preventDefault()
        const form = parseForm(e)
        const res = await api.addPost(form, "tool")
        navigate(`/tool/${res._id}`) // TODO path from consts ???
    }

    return (
        { addPost }
    )
}
