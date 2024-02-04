import useCheckSubscription from "./useCheckSubscription";
import Rooms from "./Rooms";
import RoomsTitle from "./RoomsTitle";
import RenewSubscription from "./RenewSubscription";
import { MAIN_ROUTE } from "../../utils/consts";
import useGoToCoach from '../../hooks/useGoToCoach'
import { useContext } from "react"
import { Context } from "../../Context"

export default function MessagesRooms() {

    const { subscription } = useCheckSubscription({ type: "all" })
    const { rooms, isLoadingCourses } = useContext(Context)
    const { goToCoach } = useGoToCoach()

    return (
        <>
            <RenewSubscription
                link={MAIN_ROUTE}
                btnText="Subscribe"
                onClick={() => setTimeout(() => goToCoach(), 1000)}
                {...subscription}
            />
            <RoomsTitle />
            <Rooms rooms={rooms} type="message" noRoomsMsg="No active subscriptions" isLoading={isLoadingCourses} />
        </>
    )
}
