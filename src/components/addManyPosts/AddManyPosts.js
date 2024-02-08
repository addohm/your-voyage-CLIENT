import { Add } from "@mui/icons-material"
import usePosts from "../post/usePosts"
import { Button } from "@mui/material"
import { Close, Save } from "@mui/icons-material"
import usePost from "../pages/addPosts/usePost"

export default function AddManyPosts({ type, addPath, lastInputName, addTitle, previewTitle, AddPosts, addPostsClassName, PreviewPosts }) {

    const { posts, postsSet, addOrEditPosts } = usePosts({ type, sort: { order: 1 } })

    const { deletePost } = usePost({ type })
    function _deletePost(ind, _id) {
        postsSet(prev => prev.filter((_, i) => i !== ind))
        deletePost({ id: _id })
    }

    return (
        <>
            <form className="fcc g15 m0a" onSubmit={(e) => addOrEditPosts({ e, addPath, lastInputName })}>
                <div className="title mb w100p tac">{addTitle}</div>
                <div className={addPostsClassName}>
                    {Array.from(posts)?.map((post, ind) => {
                        {/* AddPosts must have hidden _id input inside */ }
                        return ( // AddPosts: AddCourse & AddFAQ
                            <AddPosts
                                key={post._id}
                                ind={ind}
                                {...post}
                                postsSet={postsSet}
                                SaveIcon={<Button style={{ margin: 0, padding: 0, minWidth: 0, marginBottom: 5, cursor: "pointer" }} type="submit"><Save className={`${post?._id ? "brandi" : ""}`} /></Button>}
                                DeleteIcon={<Close onClick={() => _deletePost(ind, post?._id)} />}
                            />
                        )
                    })}
                </div>
                <div className="w100p fcc mb">
                    <Add style={{ fontSize: 40 }} onClick={() => postsSet(prev => [...prev, {}])} />
                </div>
            </form>
            <div className="title tac mb">{previewTitle}</div>
            <PreviewPosts />
        </>
    )
}
