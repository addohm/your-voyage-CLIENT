import { useEffect, useState } from "react"
import axios from "../../utils/axios"

export default function useCoachCardApplierCoachList() {

    const [coachList, coachListSet] = useState([])

    useEffect(() => {
        async function getCoachList() {
            const res = await axios("/getCoachList")
            coachListSet(res)
        }
        getCoachList()
    }, [])

    return { coachList }
}
