import { useParams } from "react-router-dom"
import usePostFull from "./usePostFull"
import PostFull from "./PostFull"
import Loading from "../other/Loading"

export default function PostFullWrap() {

    const { type, id } = useParams()
    const { post, isLoading } = usePostFull(type, id)

    return (
        <Loading isLoading={isLoading}>
            <PostFull {...post} type={type} id={id} value={post?.textEditorValue} />
        </Loading>
    )
}
