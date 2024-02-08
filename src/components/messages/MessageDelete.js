import axios from '../../utils/axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import { Button } from '@mui/material';
import t from '../../hooks/useT';

export default function MessageDelete({ isVisible, _id, userId, room, Icon, isRestoring = false }) {

    const { dialogSet } = useContext(Context)

    function confirmDeleteMessage() {
        axios("/deleteMessage", { _id, userId, room, isRestoring, type: "messages" })
        dialogSet({ show: false })
    }

    const dialogTitle = `${t("Are you sure you want to")} ${isRestoring ? t("restore") : t("delete")} ${t("this message")}?`
    const deleteText = t("delete")
    const restoreText = t("restore")

    async function deleteMessage(e) {
        dialogSet({
            show: true,
            title: dialogTitle,
            children:
                <Button
                    onClick={confirmDeleteMessage}
                    variant="contained"
                    className={`${isRestoring ? "bg_orange white border_orange" : "bg_danger2 danger2 border_danger2"}`}
                >
                    {isRestoring ? restoreText : deleteText}
                </Button>
        })
    }

    return (
        isVisible &&
        <div className="dib" onClick={deleteMessage}>
            <Icon />
        </div>
    )
}
