import { Send } from '@mui/icons-material';
import TextEditor from '../textEditor/TextEditor';
import useAddFile from '../pages/addPosts/useAddFile';
import { useContext } from 'react';
import { Context } from '../../Context';
import MessageReplyingTo from './MessageReplyingTo';
import MessageReplyingToTop from './MessageReplyingToTop';

export default function SendMessage({ message, messageSet, sendMessage }) {

    const { pastedOrDroppedImg, messageReplyingTo, user } = useContext(Context)
    const { fileArr } = useAddFile()

    async function _sendMessage() {
        await fileArr("/upload/msgContent", pastedOrDroppedImg)
        sendMessage()
        messageSet("")
    }

    return (
        <div className="fcc mb20">
            <MessageReplyingTo
                isVisible={messageReplyingTo?.msg}
                messageReplyingTo={messageReplyingTo}
                top={<MessageReplyingToTop text="Replying to message" />}
                isMyMsg={messageReplyingTo?.name === user?.name}
            />
            <TextEditor
                name="msg"
                className="maw600"
                value={message}
                valueSet={messageSet}
                uploadPath="/upload/msgContent"
            />
            <Send onClick={_sendMessage} className="ml10" />
        </div>
    )
}
