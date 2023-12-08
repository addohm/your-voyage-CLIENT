import { useLocation, useParams } from "react-router-dom"
import TextEditor from "../../textEditor/TextEditor"
import usePost from "./usePost"
import { Button } from "@mui/material"
import usePostFull from "../../post/usePostFull"

export default function AddPost() {

    let { type, id } = useParams()
    type = type.replace(":type", "")
    const { addPost, editPost } = usePost(type, id)
    const { post } = usePostFull(type, id)
    const location = useLocation().pathname
    const isAddLocation = location.includes("/add/") ? true : false

    return (
        <form className="maw700 m0a mt" onSubmit={(e) => isAddLocation ? addPost(e) : editPost(e)}>
            <input defaultValue={post?.title} className="h50 fz18 mb" name="title" placeholder="title" />
            <TextEditor defaultValue={post?.textEditorValue} />
            <Button type="submit">add to {type}</Button>
        </form>
    )
}
