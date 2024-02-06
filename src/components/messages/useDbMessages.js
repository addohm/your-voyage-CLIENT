import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import useInterval from "../../hooks/useInterval"
import { useLocation } from "react-router-dom"
import goToBottom from "../../utils/goToBottom"

export default function useDbMessages() {

    const token = useLocation().pathname.split("/")[2] // !!!
    const { interval } = useInterval()

    const [dbMessages, dbMessagesSet] = useState([])
    const [isDbMessagesLoaded, isDbMessagesLoadedSet] = useState(false)

    useEffect(() => {
        if (!token) return
        async function getMessages() {
            const res = await axios("/getMessages", { token })
            if (!res) return
            dbMessagesSet(res)
            isDbMessagesLoadedSet(true)
        }

        getMessages()
    }, [interval])

    // goToBottom when dbMessages is loaded ONE time
    useEffect(() => {
        if (!isDbMessagesLoaded) return
        setTimeout(() => {
            goToBottom()
        }, 1000);
    }, [isDbMessagesLoaded])

    // clean messages when changing the room
    useEffect(() => dbMessagesSet([]), [token])

    return { dbMessages, dbMessagesSet }
}
