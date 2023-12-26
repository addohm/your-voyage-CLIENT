import { useParams } from "react-router-dom"
import TextEditor from "../../textEditor/TextEditor"
import usePost from "./usePost"
import { Button } from "@mui/material"
import usePostFull from "../../post/usePostFull"

export default function AddPost(props) {

    let { _type, ignoreInputs, ignoreImg } = props
    let { type, id } = useParams()
    type = _type || type

    // ! terms & privacy: edit mode
    if (type === "terms" || type === "privacy") {
        ignoreInputs = ["title", "link"]
        ignoreImg = true
    }
    // ? terms & privacy: edit mode

    const { addOrEditPost } = usePost({ type, id, ignoreImg })
    const { post } = usePostFull(type, id)

    return (
        <form className="maw700 m0a mt" onSubmit={(e) => addOrEditPost(e)}>
            {!ignoreInputs?.includes("title") && <input required defaultValue={post?.title} className="db h50 w300 fz18 mb" name="title" placeholder="title" />}
            {!ignoreInputs?.includes("link") && <input defaultValue={post?.link} className="db h50 w300 fz18 mb" name="link" placeholder="link / affiliate link" />}
            <TextEditor defaultValue={post?.textEditorValue} className="mb" />
            <Button type="submit" variant="contained">add to {type}</Button>
        </form>
    )
}
