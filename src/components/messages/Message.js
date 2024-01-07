import { useEffect, useState } from "react"
import "./index.scss"
import MessageMenu from "./MessageMenu"
import MessageText from "./MessageText"
import MessageTime from "./MessageTime"
import MessageDate from "./MessageDate"
import MessageEdit from "./MessageEdit"
import { Send } from "@mui/icons-material"

export default function Message(props) {

    const { msg, isMyMsg, _id, email, room, isUpdated, updatedAt, createdAt, isDeleted, isRestored, msgDate, messageDateTopCopySet, img } = props
    const [isContentEditable, isContentEditableSet] = useState(null)

    useEffect(() => { window.scrollTo(0, document.body.scrollHeight) }, []) // gotoBottom onLoad

    return (
        <>
            <MessageDate msgDate={msgDate} messageDateTopCopySet={messageDateTopCopySet} />
            <div className={`f g10 ${isMyMsg ? "mla" : "mra"}`}>
                <img src={img} className="w40 h40 brL" />
                <div className={`fcc g10 p15 mb10 brL ${isMyMsg ? "myMsg" : "otherMsg"} ${isUpdated ? "updatedMsg" : ""} ${isDeleted ? "deletedMsg" : ""} ${isRestored ? "restoredMsg" : ""} msg`}>
                    <div className="por f w100p pt25">
                        <MessageText msg={msg} isContentEditable={isContentEditable} isDeleted={isDeleted} />
                        <MessageMenu isMyMsg={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} isDeleted={isDeleted} createdAt={createdAt} />
                    </div>
                    <MessageEdit SaveIcon={() => <Send />} isVisible={isContentEditable} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
                    <MessageTime isVisible={!isContentEditable} isUpdated={isUpdated} updatedAt={updatedAt} createdAt={createdAt} isDeleted={isDeleted} isRestored={isRestored} />
                </div>
            </div>
        </>
    )
}
