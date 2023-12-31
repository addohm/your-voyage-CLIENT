import { Edit, Check } from '@mui/icons-material';
import axios from '../../utils/axios';

export default function MessageEdit({ isVisible, isContentEditableSet, isContentEditable, _id, email, room }) {

    function editMessage() {
        isContentEditableSet(true)
    }

    async function saveMessage(e) {
        const msg = e.target.closest("div").innerText // update message text
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
