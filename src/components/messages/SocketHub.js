import { useParams } from "react-router-dom";
import Socket from "./Socket";
import Messages from "./Messages";
import { useContext } from "react";
import { Context } from "../../Context";

export default function SocketHub() {

    const { token } = useParams()
    const { dbMessages, dbMessagesSet } = useContext(Context)

    return (
        <>
            {/* DB messages */}
            <Messages messageReceived={dbMessages} />
            <Socket room={token} dbMessagesSet={dbMessagesSet} />
        </>
    )
}
