import Room from "./Room"
import useRooms from "./useRooms"
import "./index.scss"

export default function Rooms() {

    const { rooms } = useRooms()

    return (
        <div className="fc aic rooms">
            {rooms?.map(room => <Room key={room?.room} {...room} />)}
            {rooms?.length === 0 && <div>No active subscriptions ...</div>}
        </div>
    )
}
