import Messages from "./Messages";
import OldMessagesLoadMoreBtn from "./OldMessagesLoadMoreBtn";

export default function OldDbMessages({ oldDbMessages, skipOldDbMessagesSet, msgCurTopDateSet }) {
    return (
        <>
            <OldMessagesLoadMoreBtn skipOldDbMessagesSet={skipOldDbMessagesSet} />
            <Messages messageReceived={oldDbMessages} msgCurTopDateSet={msgCurTopDateSet} />
        </>
    )
}
