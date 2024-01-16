import { useParams } from "react-router-dom";
import Socket from "./Socket";
import Messages from "./Messages";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import axios from "../../utils/axios";

export default function SocketHub() {

    const { token } = useParams()
    const { dbMessages, dbMessagesSet, user } = useContext(Context)

    useEffect(() => { // mark all messages as read when enter the room
        axios("/markAllMessagesAsRead", { room: token, userEmail: user?.email })
    }, [])

    return (
        <>
            {/* DB messages */}
            <Messages messageReceived={dbMessages} />
            <Socket room={token} dbMessagesSet={dbMessagesSet} />
        </>
    )
}
