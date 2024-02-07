import { useParams } from "react-router-dom";
import Socket from "./Socket";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import axios from "../../utils/axios";
import OldDbMessages from "./OldDbMessages";
import MessageDate from "./MessageDate";
import NoMessagesYet from "./NoMessagesYet";
import useSendMessageShortCut from "./useSendMessageShortCut";

export default function AllMsgsAndAddMsg({ token, type }) { // type: message/support

    const { dbMessages, dbMessagesSet, user, oldDbMessages, skipOldDbMessagesSet } = useContext(Context)
    const [msgCurTopDate, msgCurTopDateSet] = useState(null)
    useSendMessageShortCut()

    useEffect(() => { // mark all messages as read when enter the room
        axios("/markAllMessagesAsRead", { room: token, userId: user?._id })
    }, [])

    return (
        <div className="por">
            <MessageDate msgCurTopDate={msgCurTopDate} />
            <OldDbMessages oldDbMessages={oldDbMessages} skipOldDbMessagesSet={skipOldDbMessagesSet} msgCurTopDateSet={msgCurTopDateSet} />
            {/* NEW DB messages */}
            <Messages messageReceived={dbMessages} msgCurTopDateSet={msgCurTopDateSet} />
            <NoMessagesYet isVisible={dbMessages?.length === 0} className="fcc aic mb" />
            <Socket room={token} dbMessagesSet={dbMessagesSet} type={type} />
        </div>
    )
}
