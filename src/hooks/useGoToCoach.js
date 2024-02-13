import { useContext } from "react";
import { Context } from "../Context";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTE } from "../utils/consts";
import delay from "../utils/delay";

export default function useGoToCoach() {

    const { isVisibleMobileNavSet } = useContext(Context)
    const navigate = useNavigate()

    async function goToCoach() {
        isVisibleMobileNavSet?.(false)
        navigate(MAIN_ROUTE)
        await delay(700) // wait for navigate

        const applierCard = document.querySelector(".applier")
        let { top } = applierCard.getBoundingClientRect();
        top = top - 90
        window.scrollBy({ top, behavior: 'smooth' })
        setTimeout(() => {
            applierCard.querySelector(`[type="submit"]`).click()
        }, 2000);
        // UNCOMMENT with "many animation" setTimeout(() => { document.querySelector(".coach").scrollIntoView({ behavior: "smooth" }) }, 2000)
    }
    return { goToCoach }
}

