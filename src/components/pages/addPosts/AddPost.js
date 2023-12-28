import { useParams } from "react-router-dom"
import usePost from "./usePost"
import { Button } from "@mui/material"
import usePostFull from "../../post/usePostFull"
import AddPostTextEditor from "./AddPostTextEditor"
import Input from "../../form/Input"

export default function AddPost(props) {

    let { _type } = props
    let { type, id } = useParams()
    type = _type || type

    const { addOrEditPost, isInputVisible } = usePost({ type, id })
    const { post } = usePostFull(type, id)

    return (
        <form className="maw700 m0a mt" onSubmit={(e) => addOrEditPost(e)}>
            {isInputVisible && <Input required defaultValue={post?.title} className="db h50 w300 fz18 mb" name="title" placeholder="title" />}
            {isInputVisible && <Input defaultValue={post?.link} className="db h50 w300 fz18 mb" name="link" placeholder="link / affiliate link" />}
            <AddPostTextEditor defaultValue={post?.textEditorValue} className="mb" />
            <Button type="submit" variant="contained">add to {type}</Button>
        </form>
    )
}
