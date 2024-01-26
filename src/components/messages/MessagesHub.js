import useCheckSubscription from "./useCheckSubscription";
import Rooms from "./Rooms";
import RoomsTitle from "./RoomsTitle";
import RenewSubscription from "./RenewSubscription";
import { MAIN_ROUTE } from "../../utils/consts";
import goToCoach from "../../utils/goToCoach";

export default function MessagesHub() {

    const { subscription } = useCheckSubscription({ type: "all" })

    return (
        <>
            <RenewSubscription
                link={MAIN_ROUTE}
                btnText="SUBSCRIBE"
                onClick={() => setTimeout(() => goToCoach(), 1000)}
                {...subscription}
            />
            <RoomsTitle />
            <Rooms />
        </>
    )
}
