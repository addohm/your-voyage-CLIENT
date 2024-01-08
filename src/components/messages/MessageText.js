import { useState } from "react";
import Markdown from "../textEditor/Markdown";
import TextEditor from "../textEditor/TextEditor";
import "./index.scss"

export default function MessageText({ msg, isContentEditable, isDeleted }) {

    const [value, valueSet] = useState(msg)

    return (
        !isContentEditable
            ?
            <div className="">
                {!isDeleted ? <Markdown className="msgText">{msg}</Markdown> : "This message has been deleted"}
            </div>
            :
            <TextEditor
                name="msg"
                className="updatedMessageText maw600"
                value={value}
                valueSet={valueSet}
                uploadPath="/upload/msgContent"
            />
    )
}
