import { Send } from '@mui/icons-material';
import { TextField } from '@mui/material';

export default function SendMessage({ message, messageSet, sendMessage }) {

    function _sendMessage() {
        sendMessage()
        messageSet("")
    }

    return (
        <div className="fcc mb20">
            <TextField
                multiline
                value={message}
                onChange={(e) => messageSet(e.target.value)}
                style={{ width: 330 }}
            />
            <Send onClick={_sendMessage} className="ml10" />
        </div>
    )
}
