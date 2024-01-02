import { Close } from '@mui/icons-material';
import axios from '../../utils/axios';
import { useContext } from 'react';
import { Context } from '../../Context';
import { Button } from '@mui/material';

export default function MessageDelete({ isVisible, _id, email, room }) {

    const { dialogSet } = useContext(Context)

    function confirmDeleteMessage() {
        axios("/deleteMessage", { _id, email, room, type: "messages" })
        dialogSet({ show: false })
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
