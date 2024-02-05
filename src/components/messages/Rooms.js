import Room from "./Room"
import "./msgStyle2.scss"
import t from "../../hooks/useT"
import Loading from "../other/Loading"

export default function Rooms({ rooms, type, noRoomsMsg, isLoading }) { // type: message/support
    return (
        <Loading isLoading={isLoading}>
            <div className="fc aic rooms px gray">
                {rooms?.map(room => <Room key={room?.room} {...room} type={type} />)}
                {rooms?.length === 0 && <div>{t(noRoomsMsg)} ...</div>}
            </div>
        </Loading>
    )
}
