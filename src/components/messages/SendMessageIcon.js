import { Send } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';

export default function SendMessageIcon({ sendMessage, isSendMessageLoading, className }) {
    return ( // TODO !!!
        false
            ?
            <CircularProgress className={`brandi ${className ? className : ""}`} size={25} />
            :
            <div title="ctrl + enter">
                <Send onClick={sendMessage} className={`sendMsgIcon ${className ? className : ""}`} />
            </div>

    )
}
