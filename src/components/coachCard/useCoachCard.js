import parseForm from "../../utils/parseForm"
import axios from "../../utils/axios"

export default function useCoachCard() {

    async function applyForCoaching(e) {
        e.preventDefault()
        const form = parseForm(e)
        const res = await axios("/applyForCoaching", { ...form, type: "coaching" })
        console.log(res)
    }

    return { applyForCoaching }
}
