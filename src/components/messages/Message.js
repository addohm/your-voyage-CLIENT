import { useEffect, useState } from "react"
import "./index.scss"
import MessageMenu from "./MessageMenu"
import MessageText from "./MessageText"
import MessageTime from "./MessageTime"
import MessageDate from "./MessageDate"

export default function Message(props) {

    const { msg, isMyMsg, _id, email, room, isUpdated, updatedAt, createdAt, isDeleted, isRestored, msgDate, messageDateTopCopySet } = props
    const [isContentEditable, isContentEditableSet] = useState(null)

    useEffect(() => { window.scrollTo(0, document.body.scrollHeight) }, []) // gotoBottom onLoad

    return (
        <>
            <MessageDate msgDate={msgDate} messageDateTopCopySet={messageDateTopCopySet} />
            <div className={`fcc g10 p15 mb10 brL ${isMyMsg ? "myMsg" : "otherMsg"} ${isUpdated ? "updatedMsg" : ""} ${isDeleted ? "deletedMsg" : ""} ${isRestored ? "restoredMsg" : ""} msg`}>
                <div className="por f w100p pt25">
                    <MessageText msg={msg} isContentEditable={isContentEditable} isDeleted={isDeleted} />
                    <MessageMenu isMyMsg={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} isDeleted={isDeleted} createdAt={createdAt} />
                </div>
                <MessageTime isUpdated={isUpdated} updatedAt={updatedAt} createdAt={createdAt} isDeleted={isDeleted} isRestored={isRestored} />
            </div>
        </>
    )
}
