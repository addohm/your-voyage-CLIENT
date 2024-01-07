import { useEffect, useState } from "react"
import axios from "../../utils/axios"

export default function useSocketHub(token) {

    const [interval, intervalSet] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            intervalSet(prev => prev + 1);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [])

    const [dbMessages, dbMessagesSet] = useState([])

    useEffect(() => {
        async function getMessages() {
            const res = await axios("/getMessages", { token })
            res && dbMessagesSet(res)
        }

        getMessages()
    }, [interval])

    return { dbMessages, dbMessagesSet }
}
