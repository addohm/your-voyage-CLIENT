import SendMessage from "./SendMessage"
import Messages from "./Messages"
import useSocket from "./useSocket"

export default function Socket() {

    const { messageSet, sendMessage, messageReceived } = useSocket()

    return (
        <>
            <SendMessage messageSet={messageSet} sendMessage={sendMessage} />
            <Messages messageReceived={messageReceived} />
        </>
    )
}
