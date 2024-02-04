import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import useInterval from "../../hooks/useInterval"
import { useLocation } from "react-router-dom"

export default function useDbMessages() {

    const token = useLocation().pathname.split("/")[2] // !!!
    const { interval } = useInterval()

    const [dbMessages, dbMessagesSet] = useState([])

    useEffect(() => {
        if (!token) return
        async function getMessages() {
            const res = await axios("/getMessages", { token })
            res && dbMessagesSet(res)
        }

        getMessages()
    }, [interval])

    // clean messages when changing the room
    useEffect(() => dbMessagesSet([]), [token])

    return { dbMessages, dbMessagesSet }
}
