import { Send } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

export default function SendMessageIcon({ sendMessage, isSendMessageLoading }) {
    return (
        isSendMessageLoading
            ?
            <CircularProgress className="ml10 brandi" size={25} />
            :
            <Send onClick={sendMessage} className="ml10 sendMsgIcon" />

    )
}
