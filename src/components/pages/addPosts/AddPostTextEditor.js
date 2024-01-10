import { useState } from "react"
import TextEditor from "../../textEditor/TextEditor"
import usePastedOrDroppedFile from "../../textEditor/usePastedOrDroppedFile"

export default function AddPostTextEditor({ defaultValue, className }) {

    const [value, valueSet] = useState("")
    const { savePastedImgOnServer, saveDroppedImgOnServer } = usePastedOrDroppedFile(valueSet, "/upload/siteContent")

    return (
        <TextEditor
            name="textEditorValue"
            defaultValue={defaultValue}
            className={className}
            value={value}
            valueSet={valueSet}
            onPaste={savePastedImgOnServer}
            onDrop={saveDroppedImgOnServer}
        />
    )
}
