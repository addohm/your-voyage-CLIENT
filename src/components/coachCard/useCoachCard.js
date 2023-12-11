import * as api from "./api"
import parseForm from "../../utils/parseForm"

export default function useCoachCard() {

    function applyForCoaching(e) {
        e.preventDefault()
        const form = parseForm(e)
        const res = api.applyForCoaching(form)
        console.log(res)
    }

    return { applyForCoaching }
}
