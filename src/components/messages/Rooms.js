import Room from "./Room"
import "./msgStyle2.scss"
import { useContext } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"

export default function Rooms() {

    const { rooms } = useContext(Context)

    return (
        <div className="fc aic rooms p">
            {rooms?.map(room => <Room key={room?.room} {...room} />)}
            {rooms?.length === 0 && <div>{t("No active subscriptions")} ...</div>}
        </div>
    )
}
