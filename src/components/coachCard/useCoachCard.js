import parseForm from "../../utils/parseForm"
import useStripe from "../stripe/useStripe"

export default function useCoachCard(courseId) {

    const { stripeLink } = useStripe(courseId)

    function memoCoachCard(e) {
        const form = parseForm(e.target.closest("form"))
        localStorage.setItem("coachCard", JSON.stringify(form))
    }

    return { stripeLink, memoCoachCard }
}
