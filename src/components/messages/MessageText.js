import calculateTextareaRows from "../../utils/calculateTextareaRows";

export default function MessageText({ msg, isContentEditable, isDeleted }) {
    return (
        !isContentEditable
            ?
            <div>
                {!isDeleted ? msg : "This message has been deleted"}
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
