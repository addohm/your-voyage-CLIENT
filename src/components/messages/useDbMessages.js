import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import useInterval from "../../hooks/useInterval"
import { useLocation } from "react-router-dom"
import Room from "./Room"

export default function useDbMessages(snackbarSet, user) { 

    const token = useLocation().pathname.split("/")[2] // !!!
    const { interval } = useInterval()

    const [dbMessages, dbMessagesSet] = useState([])

    useEffect(() => {
        if (!token) return
        async function getMessages() {
            const res = await axios("/getMessages", { token })
            res && dbMessagesSet(res)

            res?.map(({ isRead, room, email, isDeleted, ...message }) => {
                if (isDeleted) return // don't show deleted messages in snackbar
                if (!isRead) {
                    const isReceivedMsgMyMsg = user?.email === email
                    if (!isReceivedMsgMyMsg) { // if I received NOT MINE message (msg TO ME)
                        snackbarSet({ show: true, text: <Room {...message} /> })
                        // ! there are 2 markAllMessagesAsRead: 1: enter the room (from outside the room) 2: received message (being inside the room)
                        axios("/markAllMessagesAsRead", { room, userEmail: user?.email })
                    }
                }
            }

            )
        }

        getMessages()
    }, [interval])

    return { dbMessages, dbMessagesSet }
}
