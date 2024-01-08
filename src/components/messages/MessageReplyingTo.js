import { Close } from "@mui/icons-material";
import Message from "./Message";
import { useContext } from "react";
import { Context } from "../../Context";

export default function MessageReplyingTo({ messageReplyingTo, isVisible, top, isMyMsg, isVisibleClose = true }) {

    const { messageReplyingToSet } = useContext(Context)

    return (
        (messageReplyingTo?.msg && isVisible) &&
        <div className="por w100p fcc">
            {top}
            <Message
                {...messageReplyingTo}
                isReplyMode={true}
                className="replyMsg w600"
                isMyMsg={isMyMsg}
            />
            {isVisibleClose &&
                <Close
                    className="mt10"
                    onClick={() => messageReplyingToSet(null)}
                />
            }
        </div>
    )
}
