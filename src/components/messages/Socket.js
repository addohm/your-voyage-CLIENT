import SendMessage from "./SendMessage"
import useSocket from "./useSocket"

export default function Socket({ room, dbMessagesSet }) { // TODO !!! rename dbMessages

    const { sendMessage, isSendMessageLoading } = useSocket(room, dbMessagesSet)

    return (
        <>
            <SendMessage sendMessage={sendMessage} isSendMessageLoading={isSendMessageLoading} />
        </>
    )
}
