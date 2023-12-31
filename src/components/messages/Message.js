import { useEffect, useState } from "react"
import "./index.scss"
import MessageMenu from "./MessageMenu"
import MessageText from "./MessageText"
import MessageTime from "./MessageTime"
import MessageDate from "./MessageDate"
import MessageEdit from "./MessageEdit"
import { Send } from "@mui/icons-material"
import MessageIsRead from "./MessageIsRead"
import MessageReply from "./MessageReply"
import MessageReplyingTo from "./MessageReplyingTo"
import MessageReplyingToTop from "./MessageReplyingToTop"
import goToBottom from "../../utils/goToBottom"

export default function Message(props) {

    let { msg, isMyMsg, _id, email, room, isUpdated, updatedAt, createdAt, isDeleted, isRestored, msgDate, messageDateTopCopySet, img, isRead, name, className, isReplyMode, msgReplyingTo, goToReplyingToMsg } = props
    const [isContentEditable, isContentEditableSet] = useState(null)
    msg = !isReplyMode ? msg : msg?.slice(0, 90) + " ..." // shorten msg text for reply mode

    useEffect(() => goToBottom(), [])

    return (
        <>
            <MessageDate msgDate={msgDate} messageDateTopCopySet={messageDateTopCopySet} />
            <div className={`por f g10 ${className}`} onClick={goToReplyingToMsg}>
                <img src={img} className="w40 h40 brL" />
                <div className={`fcc g10 p15 mb10 brL ${isMyMsg ? "myMsg" : "otherMsg"} ${isUpdated ? "updatedMsg" : ""} ${isDeleted ? "deletedMsg" : ""} ${isRestored ? "restoredMsg" : ""} msg`}>
                    <div className="fw500 mra">{name}</div>

                    {/* ! MessageReplyingTo */}
                    <MessageReplyingTo
                        isVisible={msgReplyingTo}
                        messageReplyingTo={msgReplyingTo}
                        top={<MessageReplyingToTop text="Replies to message" />}
                        isMyMsg={isMyMsg}
                        isVisibleClose={false}
                    />
                    {/* ? MessageReplyingTo */}

                    <div className="por f w100p">
                        <MessageText msg={msg} isContentEditable={isContentEditable} isDeleted={isDeleted} />
                        <MessageMenu isVisible={!isReplyMode} isMyMsg={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} isDeleted={isDeleted} createdAt={createdAt} />
                    </div>
                    <MessageEdit SaveIcon={() => <Send />} isVisible={isContentEditable} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
                    {!isReplyMode &&
                        <div className="fcc g8 mla">
                            <MessageIsRead isVisible={!isContentEditable} isRead={isRead} isMyMsg={isMyMsg} />
                            <MessageTime isVisible={!isContentEditable} isUpdated={isUpdated} updatedAt={updatedAt} createdAt={createdAt} isDeleted={isDeleted} isRestored={isRestored} />
                        </div>
                    }
                </div>
                {!isReplyMode &&
                    <MessageReply img={img} name={name} msg={msg} />
                }
            </div>
        </>
    )
}
