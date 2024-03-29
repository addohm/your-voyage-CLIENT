import Markdown from "../textEditor/Markdown";

export default function RoomLastMsg({ msg, senderImg }) {
    return (
        msg
            ?
            <div className="textLines2 mt10"><Markdown>{msg}</Markdown></div>
            :
            senderImg &&
            <div className="mt8">[file without text]</div>
    )
}
