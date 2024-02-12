import { useContext } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"
import AdminAlert from "../admin/AdminAlert"

export default function RoomsTitle() {

    const { user } = useContext(Context)
    const className = "title tac mb mt-15"

    return (
        user?.role === "admin" || user?.role === "coach" ?
            <>
                <AdminAlert />
                <div className={className}>{t("Subscribers")}:</div>
            </>
            :
            <div className={className}>{t("Subscriptions")}:</div>
    )
}
