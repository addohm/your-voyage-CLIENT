import { useParams } from "react-router-dom"
import usePostFull from "./usePostFull"
import PostFull from "./PostFull"

export default function PostFullWrap() {

    const { type, id } = useParams()
    const { post } = usePostFull(type, id)

    return (
        <PostFull {...post} type={type} id={id} value={post?.textEditorValue} />
    )
}
