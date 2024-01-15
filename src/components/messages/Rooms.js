import Room from "./Room"
import useRooms from "./useRooms"
import "./msgStyle2.scss"
import { useContext } from "react"
import { Context } from "../../Context"

export default function Rooms() {

    const { rooms } = useContext(Context)

    return (
        <div className="fc aic rooms">
            {rooms?.map(room => <Room key={room?.room} {...room} />)}
            {rooms?.length === 0 && <div>No active subscriptions ...</div>}
        </div>
    )
}
