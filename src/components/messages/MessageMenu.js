import { useState } from "react";
import Menu from "../LoginGoogle/Menu";
import MessageEdit from "./MessageEdit";
import { ManageHistory, Close, ReplayOutlined } from '@mui/icons-material';
import MessageDelete from "./MessageDelete";
import timestampToUnix from "../../utils/timestampToUnix";

export default function MessageMenu({ isMyMsg, isContentEditableSet, isContentEditable, _id, email, room, isDeleted, createdAt }) {

    const [isHovered, isHoveredSet] = useState(null)
    const minutes = 5
    const isMsgOlderThanNMins = timestampToUnix(createdAt) < timestampToUnix(Date.now() - minutes * 60 * 1000)

    return (
        (!isMsgOlderThanNMins && isMyMsg) &&
        <div
            onMouseEnter={() => isHoveredSet(true)}
            onMouseLeave={() => isHoveredSet(false)}
        >
            <div title={minutes + " mins"}>
                <ManageHistory className="poa r-6 t-4" />
            </div>
            <Menu isVisible={isMyMsg && isHovered} className="poa r15 t-7 bg_white px5 brL" >
                <MessageEdit isVisible={isMyMsg && !isDeleted} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
                <MessageDelete Icon={() => <Close style={{ marginTop: 3 }} />} isVisible={isMyMsg && !isDeleted} _id={_id} email={email} room={room} />
                <MessageDelete Icon={() => <ReplayOutlined />} isRestoring={true} isVisible={isMyMsg && isDeleted} _id={_id} email={email} room={room} />
            </Menu>
        </div>
    )
}
