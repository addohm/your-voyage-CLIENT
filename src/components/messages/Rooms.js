import Room from "./Room"
import useRooms from "./useRooms"

export default function Rooms() {

    const { rooms } = useRooms()

    return (
        <div className="fc aic">
            {rooms?.map(room => <Room key={room?.room} {...room} />)}
        </div>
    )
}
