import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import { useLocation } from "react-router-dom"

export default function useOldDbMessages() {

    const token = useLocation().pathname.split("/")[2] // !!!
    const [oldDbMessages, oldDbMessagesSet] = useState([])
    const [skipOldDbMessages, skipOldDbMessagesSet] = useState(1) // TODO !!! rename skipOldDbMessages to "limit"

    useEffect(() => {
        if (!token) return
        async function getMessages() {
            const res = await axios("/getMessages", { token, limit: skipOldDbMessages }) // each time user hits window.scrollY=0 skipOldDbMessages will increase by 10
            if (!res) return
            // delete the last 10 items, cause it's already displayed in new messages
            for (let i = 0; i < 10; i++) {
                res.splice(res.length - 1, 1);
            }
            oldDbMessagesSet(res)
        }

        getMessages()
    }, [skipOldDbMessages])

    // clean messages when changing the room
    useEffect(() => oldDbMessagesSet([]), [token])

    return { oldDbMessages, oldDbMessagesSet, skipOldDbMessages, skipOldDbMessagesSet }
}
