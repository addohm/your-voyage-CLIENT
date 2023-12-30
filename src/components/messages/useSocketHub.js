import { useEffect, useState } from "react"
import axios from "../../utils/axios"

export default function useSocketHub(token) {

    const [dbMessages, dbMessagesSet] = useState([])

    useEffect(() => {
        async function getMessages() {
            const res = await axios("/getMessages", { token })
            res && dbMessagesSet(res)
        }

        getMessages()
    }, [])

    return { dbMessages }
}
