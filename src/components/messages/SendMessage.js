import TextEditor from '../textEditor/TextEditor';
import { useContext } from 'react';
import { Context } from '../../Context';
import MessageReplyingTo from './MessageReplyingTo';
import MessageReplyingToTop from './MessageReplyingToTop';
import useMessagePastedOrDroppedFile from './useMessagePastedOrDroppedFile';
import AddMessageFiles from './AddMessageFiles';
import SendMessageIcon from './SendMessageIcon';
import t from "../../hooks/useT";

export default function SendMessage({ sendMessage, isSendMessageLoading }) {

    const { messageReplyingTo, user, messagesSet, messages } = useContext(Context)
    const { savePastedOnServer, saveDroppedOnServer } = useMessagePastedOrDroppedFile(messagesSet)

    return (
        <div className='mb50'>
            <MessageReplyingTo
                isVisible={messageReplyingTo?.msg}
                messageReplyingTo={messageReplyingTo}
                top={<MessageReplyingToTop text={t("Reply to a message")} />}
                isMyMsg={messageReplyingTo?.name === user?.name}
            />
            <div className={`fcc fwn g10 mb20 px50 mt15`}>
                <AddMessageFiles className="asfe pb10" />
                <TextEditor
                    name="msg"
                    className="maw600 miw270"
                    value={messages?.[0]?.msg}
                    valueSet={(value) => messagesSet([{ msg: value, file: "" }])}
                    onPaste={savePastedOnServer}
                    onDrop={saveDroppedOnServer}
                    defaultValue={""} // ! vital for SendMessagePreviews
                    placeholder={`...${t("paste or drop image here")}`}
                />
                <SendMessageIcon sendMessage={sendMessage} isSendMessageLoading={isSendMessageLoading} className="asfe" />
            </div>
        </div>
    )
}
