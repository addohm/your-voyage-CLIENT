import { useContext } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"

export default function RoomsTitle() {

    const { user } = useContext(Context)
    const className = "title tac mb"

    return (
        user?.role === "admin" || user?.role === "coach" ?
            <div className={className}>{t("Subscribers")}:</div>
            :
            <div className={className}>{t("Subscriptions")}:</div>
    )
}
