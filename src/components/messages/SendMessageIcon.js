import { Send } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

export default function SendMessageIcon({ sendMessage, isSendMessageLoading, className }) {
    return (
        isSendMessageLoading
            ?
            <div>
                <CircularProgress className={`brandi ${className ? className : ""}`} size={25} />
            </div>
            :
            <div title="ctrl + enter" className={className || ""}>
                <Send onClick={sendMessage} className={`sendMsgIcon`} />
            </div>

    )
}
