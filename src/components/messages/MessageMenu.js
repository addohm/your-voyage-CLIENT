import { useState } from "react";
import Menu from "../LoginGoogle/Menu";
import MessageEdit from "./MessageEdit";
import { MoreVert } from '@mui/icons-material';
import MessageDelete from "./MessageDelete";

export default function MessageMenu({ msgRef, isMyMsg, isContentEditableSet, isContentEditable, _id, email, room }) {

    const [isHovered, isHoveredSet] = useState(null)

    return (
        isMyMsg &&
        <div
            onMouseEnter={() => isHoveredSet(true)}
            onMouseLeave={() => isHoveredSet(false)}
        >
            <MoreVert
                className="poa r-10 t-4"
            />
            <Menu
                isVisible={isMyMsg && isHovered}
                className="poa r10 t-4 bg_white px15 brL"
            >
                <MessageEdit isVisible={isMyMsg} isContentEditableSet={isContentEditableSet} isContentEditable={isContentEditable} _id={_id} email={email} room={room} />
                <MessageDelete msgRef={msgRef} isVisible={isMyMsg} _id={_id} />
            </Menu>
        </div>
    )
}
