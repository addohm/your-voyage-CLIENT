import parseForm from "../../utils/parseForm"

export default function useCoachCard() {

    function memoCoachCard(e) {
        const form = parseForm(e.target.closest("form"))
        localStorage.setItem("coachCard", JSON.stringify(form))
    }

    return { memoCoachCard }
}
