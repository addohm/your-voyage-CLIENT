import { Link } from "react-router-dom";
import timestampToTime from "../../utils/timestampToTime";
import Markdown from "../textEditor/Markdown";

export default function Room({ img, name, room, msg, createdAt }) {
    return (
        <Link to={`/message/${room}`} className="f fwn g15 maw500 mb bg_white p brL">
            <img className="h60 w60 br50" src={img} />
            <div className="fc black">
                <div className="fw600 mt3">{name}</div>
                <div className="textLines2"><Markdown>{msg}</Markdown></div>
            </div>
            {createdAt && <div className="mla">{timestampToTime(createdAt)}</div>}
        </Link>
    )
}
