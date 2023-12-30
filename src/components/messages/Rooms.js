import Room from "./Room"
import useRooms from "./useRooms"

export default function Rooms() {

    const { rooms } = useRooms()

    return (
        rooms?.map(room => <Room key={room?.roomToken} {...room} />)
    )
}
