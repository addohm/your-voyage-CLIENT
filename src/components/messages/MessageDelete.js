import axios from '../../utils/axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import { Button } from '@mui/material';

export default function MessageDelete({ isVisible, _id, email, room, Icon, isRestoring = false }) {

    const { dialogSet } = useContext(Context)

    function confirmDeleteMessage() {
        axios("/deleteMessage", { _id, email, room, isRestoring, type: "messages" })
        dialogSet({ show: false })
    }

    async function deleteMessage(e) {
        dialogSet({
            show: true,
            title: `Are you sure you want to ${isRestoring ? "restore" : "delete"} this message?`,
            children:
                <Button
                    onClick={confirmDeleteMessage}
                    variant="contained"
                    className='bg_danger danger border_danger'
                >
                    {isRestoring ? "RESTORE" : "DELETE"}
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
