import { useParams } from "react-router-dom"
import TextEditor from "../../textEditor/TextEditor"
import usePost from "./usePost"
import { Button } from "@mui/material"
import usePostFull from "../../post/usePostFull"

export default function AddPost() {

    let { type, id } = useParams()
    type = type.replace(":type", "")
    const { addOrEditPost } = usePost(type, id)
    const { post } = usePostFull(type, id)

    return (
        <form className="maw700 m0a mt" onSubmit={(e) => addOrEditPost(e)}>
            <input required defaultValue={post?.title} className="db h50 fz18 mb" name="title" placeholder="title" />
            <input required defaultValue={post?.link} className="db h50 fz18 mb" name="link" placeholder="link" />
            <TextEditor defaultValue={post?.textEditorValue} className="mb" />
            <Button type="submit" variant="contained">add to {type}</Button>
        </form>
    )
}
