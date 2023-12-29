import parseForm from "../../utils/parseForm"
import useStripe from "../stripe/useStripe"

export default function useCoachCard() {

    const { stripeLink } = useStripe()

    function goToStripe(e) {
        e.preventDefault()
        window.location.href = stripeLink
    }


    function memoCoachCard(e) {
        const form = parseForm(e.target.closest("form"))
        localStorage.setItem("coachCard", JSON.stringify(form))
    }

    return { goToStripe, memoCoachCard }
}
