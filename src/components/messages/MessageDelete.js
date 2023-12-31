import { Close } from '@mui/icons-material';
import axios from '../../utils/axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import { Button } from '@mui/material';

export default function MessageDelete({ msgRef, isVisible, _id }) {

    const { dialogSet } = useContext(Context)

    function confirmDeleteMessage() {
        axios("/deleteMessage", { _id, type: "messages" })
        dialogSet({ show: false })
        msgRef.current.classList.add("delAnim")
        setTimeout(() => msgRef.current.remove(), 900);
    }

    async function deleteMessage(e) {
        dialogSet({
            show: true,
            title: "Are you sure you want to delete this message?",
            children:
                <Button
                    onClick={confirmDeleteMessage}
                    variant="contained"
                    className='bg_danger danger border_danger'
                >
                    DELETE
                </Button>
        })
    }

    return (
        isVisible &&
        <Close onClick={deleteMessage} />
    )
}
