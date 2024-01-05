import { Edit, Check } from '@mui/icons-material';
import axios from '../../utils/axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import useAddFile from '../pages/addPosts/useAddFile';

export default function MessageEdit({ isVisible, isContentEditableSet, isContentEditable, _id, email, room }) {

    function editMessage() {
        isContentEditableSet(true)
    }

    const { pastedOrDroppedImg } = useContext(Context)
    const { fileArr } = useAddFile()

    async function saveMessage(e) {
        const msg = document.querySelector(".updatedMessageText").innerText
        await fileArr("/upload/msgContent", pastedOrDroppedImg)
        isContentEditableSet(false)
        await axios("/editMessage", { _id, email, msg, room, type: "messages" })
    }

    return (
        isVisible &&
        <>
            {!isContentEditable
                ?
                <Edit onClick={editMessage} />
                :
                <Check onClick={saveMessage} />}
        </>
    )
}
