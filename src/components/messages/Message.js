import { useState } from "react"
import "./index.scss"
import MessageMenu from "./MessageMenu"
import MessageText from "./MessageText"
import MessageTime from "./MessageTime"

export default function Message(props) {

    const { msg, isMyMsg, _id, email, room, isUpdated, updatedAt, createdAt, isDeleted } = props
    const [isContentEditable, isContentEditableSet] = useState(null)

    return (
        <div className={`fcc g10 p15 mb10 brL ${isMyMsg ? "myMsg" : "otherMsg"} ${isUpdated ? "updatedMsg" : ""} ${isDeleted ? "deletedMsg" : ""} msg`}>
            <div className="por f w100p">
                <MessageText msg={msg} isContentEditable={isContentEditable} />
                <MessageMenu isMyMsg={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
            </div>
            <MessageTime isUpdated={isUpdated} updatedAt={updatedAt} createdAt={createdAt} isDeleted={isDeleted} />
        </div>
    )
}
