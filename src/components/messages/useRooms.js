import { useEffect, useState } from "react"
import axios from "../../utils/axios";
import useInterval from "../../hooks/useInterval";
import useMessageSnackbar from "./useMessageSnackbar";

export default function useRooms(snackbarSet, user) {

    const { interval } = useInterval()
    const [rooms, roomsSet] = useState([])
    const [totalNotReadNum, totalNotReadNumSet] = useState([])
    const { showSnackbar } = useMessageSnackbar(snackbarSet, user)

    useEffect(() => {
        async function getRooms() {
            const res = await axios("/getRooms")
            totalNotReadNumSet(res?.reduce((acc, room) => acc + room.notReadNum, 0))
            res && roomsSet(res)
            showSnackbar(res)
        }

        getRooms()
    }, [interval])

    return { rooms, totalNotReadNum }
}
