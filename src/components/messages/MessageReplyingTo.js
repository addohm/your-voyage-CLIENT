import { Close } from "@mui/icons-material";
import Message from "./Message";
import { useContext } from "react";
import { Context } from "../../Context";
import goToReplyingToMsg from "./goToReplyingToMsg";

export default function MessageReplyingTo({ messageReplyingTo, isVisible, top, isMyMsg, isVisibleClose = true }) {

    const { messageReplyingToSet } = useContext(Context)

    return (
        (messageReplyingTo?.msg && isVisible) &&
        <div className="por maw600 m0a fcc">
            {top}
            <Message
                {...messageReplyingTo}
                isReplyMode={true}
                className="replyMsg maw600" // ???
                isMyMsg={isMyMsg}
                goToReplyingToMsg={() => goToReplyingToMsg(messageReplyingTo?.msg)}
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
