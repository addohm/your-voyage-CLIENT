import { Link } from "react-router-dom";
import timestampToTime from "../../utils/timestampToTime";
import Markdown from "../textEditor/Markdown";
import NoMessagesYet from "./NoMessagesYet";
import UserImgWithNotReadNum from "../other/UserImgWithNotReadNum";

export default function Room({ img, name, room, msg, createdAt, notReadNum, msgImg }) {
    return (
        <Link to={`/message/${room}`} className="f fwn g15 maw500 mb bg_white p brL">
            <div className="por">
                <UserImgWithNotReadNum img={img} notReadNum={notReadNum} imgClassName="h60 w60" numClassName="h22 w22" />
            </div>
            <div className="fc black">
                <div className="fw600 mt3">{name}</div>
                <div className="f fwn g10 mt10">
                    {msgImg && <img className="w40 h40 brL" src={msgImg} />}
                    <div className="textLines2 mt10"><Markdown>{msg}</Markdown></div>
                    <NoMessagesYet isVisible={!msg} className="fsi gray" />
                </div>
            </div>
            {createdAt && <div className="mla">{timestampToTime(createdAt)}</div>}
        </Link>
    )
}
