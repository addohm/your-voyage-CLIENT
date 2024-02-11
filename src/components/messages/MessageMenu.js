import { useState } from "react";
import Menu from "../LoginGoogle/Menu";
import MessageEdit from "./MessageEdit";
import { MoreVert, Close, ReplayOutlined, ArrowBack } from '@mui/icons-material';
import MessageDelete from "./MessageDelete";
import timestampToUnix from "../../utils/timestampToUnix";
import { Check } from '@mui/icons-material';

export default function MessageMenu({ isVisible, isMyMsg, isContentEditableSet, isContentEditable, _id, userId, room, isDeleted, createdAt, msg }) {

    const [isHovered, isHoveredSet] = useState(null)
    const minutes = 5
    const isMsgOlderThanNMins = timestampToUnix(createdAt) < timestampToUnix(Date.now() - minutes * 60 * 1000)

    return (
        (isVisible && !isMsgOlderThanNMins && isMyMsg) &&
        <div
            onMouseEnter={() => isHoveredSet(true)}
            onMouseLeave={() => isHoveredSet(false)}
        >
            <div title={minutes + " mins"}>
                <MoreVert className="poa r-10 t-34" />
            </div>
            <Menu isVisible={isMyMsg && isHovered} className="poa r11 t-37 bg_white px5 brL" >
                {isContentEditable && <ArrowBack onClick={() => isContentEditableSet(false)} />}
                <MessageEdit SaveIcon={() => <Check />} isVisible={isMyMsg && !isDeleted} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} userId={userId} room={room} msg={msg} />
                <MessageDelete Icon={() => <Close style={{ marginTop: 3 }} />} isVisible={isMyMsg && !isDeleted} _id={_id} userId={userId} room={room} msg={msg} isContentEditableSet={isContentEditableSet} />
                <MessageDelete Icon={() => <ReplayOutlined />} isRestoring={true} isVisible={isMyMsg && isDeleted} _id={_id} userId={userId} room={room} msg={msg} isContentEditableSet={isContentEditableSet} />
            </Menu>
        </div>
    )
}
