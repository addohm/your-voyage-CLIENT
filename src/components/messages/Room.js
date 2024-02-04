import { Link } from "react-router-dom";
import timestampToTime from "../../utils/timestampToTime";
import NoMessagesYet from "./NoMessagesYet";
import UserImgWithNotReadNum from "../other/UserImgWithNotReadNum";
import RoomLastMsg from "./RoomLastMsg";
import RoomMsgImg from "./RoomMsgImg";

export default function Room({ img, name, room, msg, createdAt, notReadNum, msgImg, courseName, coachName, type }) {
    // type: message, support
    return (
        <Link className="f fwn g15 maw500 mb bg_white zi2 p brL" onClick={() => window.location.href = `/${type}/${room}`}>
            <div className="por">
                <UserImgWithNotReadNum img={img} name={name} notReadNum={notReadNum} imgClassName="h60 w60 fz20" numClassName="h22 w22" />
            </div>
            <div className="fc black">
                <div className="fw600 mt3">{coachName || name} ~ {courseName}</div>
                <div className="f fwn g10 mt10">
                    <RoomMsgImg isVisible={msg} msgImg={msgImg} img={img} name={name} />
                    <RoomLastMsg msg={msg} msgImg={msgImg} />
                    <NoMessagesYet isVisible={!msg && !msgImg} className="fsi gray" />
                </div>
            </div>
            {createdAt && <div className="mla">{timestampToTime(createdAt)}</div>}
        </Link>
    )
}
