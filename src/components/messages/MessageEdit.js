import { Edit } from '@mui/icons-material';
import axios from '../../utils/axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import useAddFile from '../pages/addPosts/useAddFile';

export default function MessageEdit({ isVisible, isContentEditableSet, isContentEditable, _id, userId, room, SaveIcon, msg: oldMsg }) {

    function editMessage() {
        isContentEditableSet(true)
    }

    const { pastedOrDroppedImg } = useContext(Context)
    const { fileArr } = useAddFile()

    async function saveMessage(e) {
        const msg = e.target.closest(".msg").querySelector(".updatedMessageText").innerText
        if (msg === oldMsg) return
        await fileArr("/upload/msgContent", pastedOrDroppedImg)
        isContentEditableSet(false)
        await axios("/editMessage", { _id, userId, msg, room, type: "messages" })
    }

    return (
        isVisible &&
        <>
            {!isContentEditable
                ?
                <Edit onClick={editMessage} />
                :
                <div onClick={saveMessage} className="dib mla saveUpdatedMsgIcon" title="ctrl + enter">
                    <SaveIcon />
                </div>
            }
        </>
    )
}
