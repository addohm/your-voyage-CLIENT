import { useState } from "react"
import TextEditor from "../../textEditor/TextEditor"

export default function AddPostTextEditor({ defaultValue, className }) {

    const [value, valueSet] = useState("")

    return (
        <TextEditor name="textEditorValue" defaultValue={defaultValue} className={className} value={value} valueSet={valueSet} />
    )
}
