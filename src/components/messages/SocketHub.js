import { useParams } from "react-router-dom";
import Socket from "./Socket";
import useSocketHub from "./useSocketHub";
import Messages from "./Messages";

export default function SocketHub() {

    const { token } = useParams()
    const { dbMessages } = useSocketHub(token)

    return (
        <>
            {/* DB messages */}
            <Messages messageReceived={dbMessages} />
            <Socket room={token} />
        </>
    )
}
