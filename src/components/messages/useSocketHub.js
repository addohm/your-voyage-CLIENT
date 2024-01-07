import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import useInterval from "../../hooks/useInterval"

export default function useSocketHub(token) {

    const { interval } = useInterval()

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
