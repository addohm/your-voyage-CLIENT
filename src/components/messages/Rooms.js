import Room from "./Room"
import "./msgStyle2.scss"
import t from "../../hooks/useT"

export default function Rooms({ rooms, type }) { // type: message/support
    return (
        <div className="fc aic rooms p">
            {rooms?.map(room => <Room key={room?.room} {...room} type={type} />)}
            {rooms?.length === 0 && <div>{t("No active subscriptions")} ...</div>}
        </div>
    )
}
