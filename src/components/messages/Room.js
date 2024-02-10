import { Link } from "react-router-dom";
import timestampToTime from "../../utils/timestampToTime";
import NoMessagesYet from "./NoMessagesYet";
import UserImgWithNotReadNum from "../other/UserImgWithNotReadNum";
import RoomLastMsg from "./RoomLastMsg";
import RoomSmallImg from "./RoomSmallImg";

export default function Room({ img, name, room, msg, createdAt, notReadNum, senderImg, courseName, coachName, type, senderName }) {
    // type: message, support
    return (
        <Link className="f fwn g15 maw500 mb bg_white zi2 p brL bsh cardAnim" onClick={() => window.location.href = `/${type}/${room}`}>
            <div className="por">
                {/* BIG Room img */}
                <UserImgWithNotReadNum img={img} name={coachName || name} notReadNum={notReadNum} imgClassName="h60 w60 fz20" numClassName="h22 w22" />
            </div>
            <div className="fc black">
                <div className="fw600 mt3">{coachName || name} ~ {courseName}</div>
                <div className="f fwn g10 mt10">
                    <RoomSmallImg isVisible={msg} senderImg={senderImg} img={img} name={name} senderName={senderName} />
                    <RoomLastMsg msg={msg} senderImg={senderImg} />
                    <NoMessagesYet isVisible={msg === undefined} className="fsi gray" />
                </div>
            </div>
            {createdAt && <div className="mla">{timestampToTime(createdAt)}</div>}
        </Link>
    )
}
