import SendMessage from "./SendMessage"
import useSocket from "./useSocket"

export default function Socket({ room, dbMessagesSet }) { // TODO !!! rename dbMessages

    const { messageSet, sendMessage } = useSocket(room, dbMessagesSet)

    return (
        <>
            <SendMessage messageSet={messageSet} sendMessage={sendMessage} />
        </>
    )
}
