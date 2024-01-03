import SendMessage from "./SendMessage"
import useSocket from "./useSocket"

export default function Socket({ room, dbMessagesSet }) { // TODO !!! rename dbMessages

    const { message, messageSet, sendMessage } = useSocket(room, dbMessagesSet)

    return (
        <>
            <SendMessage messageSet={messageSet} sendMessage={sendMessage} message={message} />
        </>
    )
}
