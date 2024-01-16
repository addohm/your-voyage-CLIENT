import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import useInterval from "../../hooks/useInterval"
import { useLocation } from "react-router-dom"
import Room from "./Room"
import useMessageSnackbar from "./useMessageSnackbar"

export default function useDbMessages(snackbarSet, user) {

    const token = useLocation().pathname.split("/")[2] // !!!
    const { interval } = useInterval()

    const [dbMessages, dbMessagesSet] = useState([])
    const { showSnackbar } = useMessageSnackbar(snackbarSet, user)

    useEffect(() => {
        if (!token) return
        async function getMessages() {
            const res = await axios("/getMessages", { token })
            res && dbMessagesSet(res)
            showSnackbar(res)
        }

        getMessages()
    }, [interval])

    return { dbMessages, dbMessagesSet }
}
