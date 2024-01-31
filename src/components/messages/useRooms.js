import { useEffect, useState } from "react"
import axios from "../../utils/axios";
import useInterval from "../../hooks/useInterval";
import useMessageSnackbar from "./useMessageSnackbar";

export default function useRooms({ snackbarSet, user, path }) { // path = "/getRooms","/getRoomsSupport"

    const { interval } = useInterval()
    const [rooms, roomsSet] = useState([])
    const [totalNotReadNum, totalNotReadNumSet] = useState([])
    const { showSnackbar } = useMessageSnackbar(snackbarSet, user)

    useEffect(() => {
        async function getRooms() {
            if (!user) return
            const res = await axios(path)
            if (!res) return
            totalNotReadNumSet(res?.reduce((acc, room) => acc + room.notReadNum, 0))
            roomsSet(res)
            showSnackbar(res)
        }

        getRooms()
    }, [interval])

    return [rooms, totalNotReadNum]
}
