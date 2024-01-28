import { Link } from "react-router-dom";
import timestampToTime from "../../utils/timestampToTime";
import NoMessagesYet from "./NoMessagesYet";
import UserImgWithNotReadNum from "../other/UserImgWithNotReadNum";
import RoomLastMsg from "./RoomLastMsg";

export default function Room({ img, name, room, msg, createdAt, notReadNum, msgImg, courseName }) {
    return (
        <Link className="f fwn g15 maw500 mb bg_white zi2 p brL" onClick={() => window.location.href = `/message/${room}`}>
            <div className="por">
                <UserImgWithNotReadNum img={img} notReadNum={notReadNum} imgClassName="h60 w60" numClassName="h22 w22" />
            </div>
            <div className="fc black">
                <div className="fw600 mt3">{name} ~ {courseName}</div>
                <div className="f fwn g10 mt10">
                    {msgImg && <img className="w40 h40 brL" src={msgImg} />}
                    <RoomLastMsg msg={msg} msgImg={msgImg} />
                    <NoMessagesYet isVisible={!msg && !msgImg} className="fsi gray" />
                </div>
            </div>
            {createdAt && <div className="mla">{timestampToTime(createdAt)}</div>}
        </Link>
    )
}
