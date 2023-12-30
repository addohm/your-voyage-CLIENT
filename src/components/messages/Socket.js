import SendMessage from "./SendMessage"
import Messages from "./Messages"
import useSocket from "./useSocket"

export default function Socket({ room }) {

    const { messageSet, sendMessage, messageReceived } = useSocket(room)

    return (
        <>
            {/* Socket (temp) messages */}
            <Messages messageReceived={messageReceived} />
            <SendMessage messageSet={messageSet} sendMessage={sendMessage} />
        </>
    )
}
