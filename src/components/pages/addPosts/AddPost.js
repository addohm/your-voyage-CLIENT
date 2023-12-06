import TextEditor from "../../textEditor/TextEditor"
import usePost from "./usePost"
import { Button } from "@mui/material"

export default function AddPost() {

    const { addPost } = usePost()

    return (
        <form onSubmit={addPost} className="maw700 m0a mt">
            <TextEditor />
            <Button type="submit">123</Button>
        </form>
    )
}
