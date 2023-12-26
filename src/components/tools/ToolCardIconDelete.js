import { Clear } from '@mui/icons-material'
import usePost from '../pages/addPosts/usePost'

export default function ToolCardIconDelete({ type, _id }) {

    const { deletePost } = usePost({ type, _id })

    function _deletePost(e) {
        if (window.confirm('Are you sure you want to delete this post?')) deletePost(e)
    }

    return (
        <Clear style={{ height: 30, width: 30 }} onClick={_deletePost} />
    )
}
