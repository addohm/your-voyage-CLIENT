import CheckSubscription from "./CheckSubscription";
import Rooms from "./Rooms";
import RoomsTitle from "./RoomsTitle";

export default function MessagesHub() {
    return (
        <>
            <CheckSubscription />
            <RoomsTitle/>
            <Rooms />
        </>
    )
}
