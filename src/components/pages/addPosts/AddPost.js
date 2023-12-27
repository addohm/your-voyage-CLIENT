import { useParams } from "react-router-dom"
import usePost from "./usePost"
import { Button } from "@mui/material"
import usePostFull from "../../post/usePostFull"
import AddPostTextEditor from "./AddPostTextEditor"

export default function AddPost(props) {

    let { _type } = props
    let { type, id } = useParams()
    type = _type || type

    const { addOrEditPost, isInputVisible } = usePost({ type, id })
    const { post } = usePostFull(type, id)

    return (
        <form className="maw700 m0a mt" onSubmit={(e) => addOrEditPost(e)}>
            {isInputVisible && <input required defaultValue={post?.title} className="db h50 w300 fz18 mb" name="title" placeholder="title" />}
            {isInputVisible && <input defaultValue={post?.link} className="db h50 w300 fz18 mb" name="link" placeholder="link / affiliate link" />}
            <AddPostTextEditor defaultValue={post?.textEditorValue} className="mb" />
            <Button type="submit" variant="contained">add to {type}</Button>
        </form>
    )
}
