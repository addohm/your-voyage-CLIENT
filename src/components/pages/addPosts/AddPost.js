import { useParams } from "react-router-dom"
import usePost from "./usePost"
import { Button } from "@mui/material"
import usePostFull from "../../post/usePostFull"
import AddPostTextEditor from "./AddPostTextEditor"
import Input from "../../form/Input"
import AddPostPreview from "./AddPostPreview"
import { useEffect, useState } from "react"

export default function AddPost(props) {

    let { _type } = props
    let { type, id } = useParams()
    type = _type || type

    const { addOrEditPost, isInputVisible } = usePost({ type, id })
    const { post } = usePostFull(type, id)

    const [textEditorValue, textEditorValueSet] = useState("") // for AddPostTextEditor & AddPostPreview
    const [titleValue, titleValueSet] = useState("") // for AddPostPreview
    const [linkValue, linkValueSet] = useState("") // for AddPostPreview

    // set input values in edit mode
    useEffect(() => {
        titleValueSet(post?.title)
        linkValueSet(post?.link)
    }, [post])

    return (
        <div className="f g50 wfc m0a">
            <form className="w600 m0a mt" onSubmit={(e) => addOrEditPost(e)}>
                {isInputVisible && <Input required defaultValue={post?.title} className="db h50 w300 fz18 mb" name="title" value={titleValue} onChange={(e) => titleValueSet(e.target.value)} placeholder="title" />}
                {isInputVisible && <Input defaultValue={post?.link} className="db h50 w300 fz18 mb" name="link" value={linkValue} onChange={(e) => linkValueSet(e.target.value)} placeholder="link / affiliate link" type="url" />}
                <AddPostTextEditor defaultValue={post?.textEditorValue} className="mb" value={textEditorValue} valueSet={textEditorValueSet} />
                <Button type="submit" variant="contained">add to {type}</Button>
            </form>
            <AddPostPreview
                className={`w600 m0a mt 
                ${titleValue || linkValue || textEditorValue ? "cardAnim" : "dn"}`} // appearance animation
                type={type}
                id={id}
                value={textEditorValue}
                title={isInputVisible ? titleValue : post?.title} // ???
                link={isInputVisible ? linkValue : post?.link} // ???
            />
        </div>
    )
}
