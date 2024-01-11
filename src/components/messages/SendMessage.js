import TextEditor from '../textEditor/TextEditor';
import { useContext } from 'react';
import { Context } from '../../Context';
import MessageReplyingTo from './MessageReplyingTo';
import MessageReplyingToTop from './MessageReplyingToTop';
import useMessagePastedOrDroppedFile from './useMessagePastedOrDroppedFile';
import AddMessageFiles from './AddMessageFiles';
import SendMessageIcon from './SendMessageIcon';

export default function SendMessage({ sendMessage, isSendMessageLoading }) {

    const { messageReplyingTo, user, messagesSet, messages } = useContext(Context)
    const { savePastedOnServer, saveDroppedOnServer } = useMessagePastedOrDroppedFile(messagesSet)

    return (
        <div className="fcc mb20">
            <MessageReplyingTo
                isVisible={messageReplyingTo?.msg}
                messageReplyingTo={messageReplyingTo}
                top={<MessageReplyingToTop text="Replying to message" />}
                isMyMsg={messageReplyingTo?.name === user?.name}
            />
            <AddMessageFiles />
            <TextEditor
                name="msg"
                className="maw600"
                value={messages?.[0]?.msg}
                valueSet={(value) => messagesSet([{ msg: value, file: "" }])}
                onPaste={savePastedOnServer}
                onDrop={saveDroppedOnServer}
                defaultValue={""} // ! vital for SendMessagePreviews
            />
            <SendMessageIcon sendMessage={sendMessage} isSendMessageLoading={isSendMessageLoading} />
        </div>
    )
}
