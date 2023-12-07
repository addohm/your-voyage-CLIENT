import MarkDown from "../textEditor/Markdown"

export default function ToolCardText({ textEditorValue }) {
    const textWithoutImg = textEditorValue.replace(/!\[image\]\([^)]+\.png\)/g, "")
    return (
        <div className="tac">
            <MarkDown>
                {textWithoutImg}
            </MarkDown>
        </div>
    )
}
