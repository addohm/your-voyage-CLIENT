import { Clear } from '@mui/icons-material'
import usePost from '../pages/addPosts/usePost'

export default function ToolCardIconDelete({ type, _id, isVisible }) {

    const { deletePost } = usePost({ type })

    function _deletePost(e) {
        if (window.confirm('Are you sure you want to delete this post?')) deletePost({ e, id: _id })
    }

    return (
        isVisible &&
        <Clear style={{ height: 30, width: 30 }} onClick={_deletePost} />
    )
}
