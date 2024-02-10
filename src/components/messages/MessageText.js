import { useState } from "react";
import Markdown from "../textEditor/Markdown";
import TextEditor from "../textEditor/TextEditor";
import "./msgStyle2.scss"
import t from "../../hooks/useT";

export default function MessageText({ msg, isContentEditable, isDeleted }) {

    const [value, valueSet] = useState(msg)

    return (
        !isContentEditable
            ?
            <div className="">
                {!isDeleted
                    ?
                    <Markdown className="msgText">{msg}</Markdown>
                    :
                    <div className="fsi gray wsn">{t("This message has been deleted")}</div>
                }
            </div>
            :
            <TextEditor
                name="msg"
                className="updatedMessageText maw600"
                value={value}
                valueSet={valueSet}
                uploadPath="/upload/msgContent"
                placeholder="...updating message"
            />
    )
}
