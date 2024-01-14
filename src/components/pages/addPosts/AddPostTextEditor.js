import TextEditor from "../../textEditor/TextEditor"
import usePastedOrDroppedFile from "../../textEditor/usePastedOrDroppedFile"

export default function AddPostTextEditor({ defaultValue, className, value, valueSet }) {

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
            placeholder="...paste or drop image here"
        />
    )
}
