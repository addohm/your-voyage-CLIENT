import calculateTextareaRows from "../../utils/calculateTextareaRows";

export default function MessageText({ msg, isContentEditable }) {
    return (
        !isContentEditable
            ?
            <div>{msg}</div>
            :
            <textarea
                className="updatedMessageText"
                autoFocus
                defaultValue={msg}
                rows={calculateTextareaRows(msg)}
            />
    )
}
