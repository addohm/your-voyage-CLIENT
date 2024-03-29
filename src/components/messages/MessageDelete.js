import axios from '../../utils/axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import { Button } from '@mui/material';
import t from '../../hooks/useT';

export default function MessageDelete({ isVisible, _id, userId, room, Icon, isRestoring = false, msg, isContentEditableSet }) {

    const { dialogSet } = useContext(Context)

    function confirmDeleteMessage() {
        axios("/deleteMessage", { _id, userId, room, isRestoring, type: "messages" })
        dialogSet({ show: false })
        isContentEditableSet(false)
    }

    const dialogTitle = `${t("Are you sure you want to")} ${isRestoring ? t("restore") : t("delete")} ${t("this message")}?`
    const shortMsg = msg.length > 120 ? msg.slice(0, 120) + "..." : msg
    const deleteText = t("delete")
    const restoreText = t("restore")

    async function deleteMessage(e) {
        dialogSet({
            show: true,
            title: dialogTitle,
            children:
                <div className='maw500'>
                    <div className='w100p tac fsi mb50'>{shortMsg}</div>
                    <Button
                        onClick={confirmDeleteMessage}
                        variant="contained"
                        className={`${isRestoring ? "bg_orange white border_orange" : "bg_danger2 danger2 border_danger2"}`}
                    >
                        {isRestoring ? restoreText : deleteText}
                    </Button>
                </div>
        })
    }

    return (
        isVisible &&
        <div className="dib" onClick={deleteMessage}>
            <Icon />
        </div>
    )
}
