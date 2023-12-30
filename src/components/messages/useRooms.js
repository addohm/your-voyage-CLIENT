import { useEffect, useState } from "react"
import axios from "../../utils/axios";

export default function useRooms() {

    const [rooms, roomsSet] = useState([])

    useEffect(() => {
        async function getRooms() {
            const res = await axios("/getRooms")
            res && roomsSet(res)
        }

        getRooms()
    }, [])

    return { rooms }
}
