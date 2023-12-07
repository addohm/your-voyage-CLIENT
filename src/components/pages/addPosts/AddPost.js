import TextEditor from "../../textEditor/TextEditor"
import usePost from "./usePost"
import { Button } from "@mui/material"

export default function AddPost() {

    const { addPost } = usePost()

    return (
        <form className="maw700 m0a mt" onSubmit={addPost}>
            <input className="h50 fz18 mb" name="title" placeholder="title" />
            <TextEditor />
            <Button type="submit">123</Button>
        </form>
    )
}
