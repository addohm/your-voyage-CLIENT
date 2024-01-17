import { useParams } from "react-router-dom";
import Socket from "./Socket";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import axios from "../../utils/axios";
import OldDbMessages from "./OldDbMessages";
import MessageDate from "./MessageDate";
import NoMessagesYet from "./NoMessagesYet";

export default function SocketHub() {

    const { token } = useParams()
    const { dbMessages, dbMessagesSet, user, oldDbMessages, skipOldDbMessagesSet } = useContext(Context)
    const [msgCurTopDate, msgCurTopDateSet] = useState(null)

    useEffect(() => { // mark all messages as read when enter the room
        axios("/markAllMessagesAsRead", { room: token, userEmail: user?.email })
    }, [])

    return (
        <div className="por">
            <MessageDate msgCurTopDate={msgCurTopDate} />
            <OldDbMessages oldDbMessages={oldDbMessages} skipOldDbMessagesSet={skipOldDbMessagesSet} msgCurTopDateSet={msgCurTopDateSet} />
            {/* NEW DB messages */}
            <Messages messageReceived={dbMessages} msgCurTopDateSet={msgCurTopDateSet} />
            <NoMessagesYet isVisible={dbMessages?.length === 0} className="fcc aic mb" />
            <Socket room={token} dbMessagesSet={dbMessagesSet} />
        </div>
    )
}
