import MarkDown from "../textEditor/Markdown"

export default function ToolCardText({ textEditorValue, className }) {

    let textWithoutImg = textEditorValue?.replace(/!\[image\]\([^)]+\.png\)/g, "")
    textWithoutImg = textWithoutImg?.substring(0, 120) + " ..."
    
    return (
        <div className={className}>
            <MarkDown>
                {textWithoutImg}
            </MarkDown>
        </div>
    )
}
