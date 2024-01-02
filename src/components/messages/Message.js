import { useState } from "react"
import "./index.scss"
import timestampToTime from "../../utils/timestampToTime"
import MessageMenu from "./MessageMenu"
import calculateTextareaRows from "../../utils/calculateTextareaRows"

export default function Message(props) {

    const { msg, isMyMsg, _id, email, room, isUpdated, updatedAt, createdAt } = props
    const [isContentEditable, isContentEditableSet] = useState(null)

    return (
        <div className={`fcc g10 p15 mb10 brL ${isMyMsg ? "myMsg" : "otherMsg"} ${isUpdated ? "updatedMsg" : ""} msg`}>
            <div
                className="por f w100p"
            >
                {!isContentEditable
                    ?
                    <div>{msg}</div>
                    :
                    <textarea
                        className="updatedMessageText"
                        autoFocus
                        defaultValue={msg}
                        rows={calculateTextareaRows(msg)}
                    />}
                <MessageMenu isMyMsg={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
            </div>
            {isUpdated
                ?
                <div className="mla">updated: {timestampToTime(updatedAt)}</div>
                :
                <div className="mla">{timestampToTime(createdAt)}</div>}
        </div>
    )
}
