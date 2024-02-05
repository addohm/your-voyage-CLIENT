import { useNavigate } from "react-router-dom";
import { MESSAGES_ROUTE } from "../../utils/consts";

export default function useHasPurchaseChangeMainPage({ user, location }) {

    const navigate = useNavigate()

    function defineMainPage() {
        // if user has purchase: his main page = MESSAGES_ROUTE
        if (!user?.hasPurchase) return
        if (location.includes("/message/")) return // don't redirect from here
        if (location.includes("/support/")) return // don't redirect from here
        navigate(MESSAGES_ROUTE)
    }

    return { defineMainPage }
}
