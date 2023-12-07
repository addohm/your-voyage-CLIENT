import { ADD_POSTS_ROUTE } from "../../../utils/consts"
import TextEditor from "../../textEditor/TextEditor"
import usePost from "./usePost"
import { Button } from "@mui/material"

export default function AddPost({ location }) {

    const { addPost } = usePost()
    const type = location.match(/(?:-)(.+)/)[1]

    return (
        location !== ADD_POSTS_ROUTE &&
        <form className="maw700 m0a mt" onSubmit={addPost}>
            <input className="h50 fz18 mb" name="title" placeholder="title" />
            <TextEditor />
            <Button type="submit">add to {type}</Button>
        </form>
    )
}
