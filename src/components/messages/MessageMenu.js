import { useState } from "react";
import Menu from "../LoginGoogle/Menu";
import MessageEdit from "./MessageEdit";
import { MoreVert, Close, ReplayOutlined } from '@mui/icons-material';
import MessageDelete from "./MessageDelete";

export default function MessageMenu({ isMyMsg, isContentEditableSet, isContentEditable, _id, email, room, isDeleted }) {

    const [isHovered, isHoveredSet] = useState(null)

    return (
        isMyMsg &&
        <div
            onMouseEnter={() => isHoveredSet(true)}
            onMouseLeave={() => isHoveredSet(false)}
        >
            <MoreVert className="poa r-10 t-4" />
            <Menu isVisible={isMyMsg && isHovered} className="poa r10 t-4 bg_white px15 brL" >
                <MessageEdit isVisible={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
                <MessageDelete Icon={() => <Close />} isVisible={isMyMsg && !isDeleted} _id={_id} email={email} room={room} />
                <MessageDelete Icon={() => <ReplayOutlined />} isRestoring={true} isVisible={isMyMsg && isDeleted} _id={_id} email={email} room={room} />
            </Menu>
        </div>
    )
}
