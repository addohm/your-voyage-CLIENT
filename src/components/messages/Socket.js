import SendMessage from "./SendMessage"
import useSocket from "./useSocket"

export default function Socket({ room, dbMessagesSet, type }) { // type: message/support

    const { sendMessage, isSendMessageLoading } = useSocket({ room, dbMessagesSet, type })

    return (
        <SendMessage sendMessage={sendMessage} isSendMessageLoading={isSendMessageLoading} />
    )
}
