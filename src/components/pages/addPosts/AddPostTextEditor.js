import TextEditor from "../../textEditor/TextEditor"
import usePastedOrDroppedFile from "../../textEditor/usePastedOrDroppedFile"
import t from "../../../hooks/useT"

export default function AddPostTextEditor({ defaultValue, className, value, valueSet }) {

    const { savePastedImgOnServer, saveDroppedImgOnServer } = usePastedOrDroppedFile(valueSet, "/upload/siteContent")

    return (
        <TextEditor
            name="textEditorValue"
            defaultValue={defaultValue}
            className={`showTextEditorOptions ${className}`}
            value={value}
            valueSet={valueSet}
            onPaste={savePastedImgOnServer}
            onDrop={saveDroppedImgOnServer}
            placeholder={`...${t("paste or drop image here")}`}
        />
    )
}
