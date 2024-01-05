import calculateTextareaRows from "../../utils/calculateTextareaRows";
import Markdown from "../textEditor/Markdown";
import "./index.scss"

export default function MessageText({ msg, isContentEditable, isDeleted }) {
    return (
        !isContentEditable
            ?
            <div className="messageText">
                {!isDeleted ? <Markdown>{msg}</Markdown> : "This message has been deleted"}
            </div>
            :
            <textarea
                className="updatedMessageText"
                autoFocus
                defaultValue={msg}
                rows={calculateTextareaRows(msg)}
            />
    )
}
