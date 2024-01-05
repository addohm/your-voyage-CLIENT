import { Send } from '@mui/icons-material';
import TextEditor from '../textEditor/TextEditor';
import useAddFile from '../pages/addPosts/useAddFile';
import { useContext } from 'react';
import { Context } from '../../Context';

export default function SendMessage({ message, messageSet, sendMessage }) {

    const { pastedOrDroppedImg } = useContext(Context)
    const { fileArr } = useAddFile()

    async function _sendMessage() {
        await fileArr("/upload/msgContent", pastedOrDroppedImg)
        sendMessage()
        messageSet("")
    }

    return (
        <div className="fcc mb20">
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
