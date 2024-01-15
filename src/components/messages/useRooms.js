import { useEffect, useState } from "react"
import axios from "../../utils/axios";
import useInterval from "../../hooks/useInterval";

export default function useRooms() {

    const { interval } = useInterval()
    const [rooms, roomsSet] = useState([])
    const [totalNotReadNum, totalNotReadNumSet] = useState([])

    useEffect(() => {
        async function getRooms() {
            const res = await axios("/getRooms")
            totalNotReadNumSet(res?.reduce((acc, room) => room.notReadNum))
            res && roomsSet(res)
        }

        getRooms()
    }, [interval])

    return { rooms, totalNotReadNum }
}
