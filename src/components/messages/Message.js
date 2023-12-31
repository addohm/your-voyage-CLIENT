import { useState } from "react"
import MessageEdit from "./MessageEdit"
import "./index.scss"
import timestampToTime from "../../utils/timestampToTime"

export default function Message(props) {

    const { msg, isMyMsg, _id, email, room, isUpdated, updatedAt, createdAt } = props
    const [isContentEditable, isContentEditableSet] = useState(null)

    return (
        <div className={`fcc g10 p15 mb10 brL ${isMyMsg ? "myMsg" : "otherMsg"} ${isUpdated ? "updatedMsg" : ""} msg`}>
            {/* MessageEdit takes inner text from closest div (this) */}
            <div
                className="f w100p"
                contentEditable={isContentEditable}
            >
                <div>{msg}</div>
                <MessageEdit isVisible={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
            </div>
            {isUpdated
                ?
                <div className="mla">updated: {timestampToTime(updatedAt)}</div>
                :
                <div className="mla">{timestampToTime(createdAt)}</div>}
        </div>
    )
}
