import Rooms from "../messages/Rooms";
import { useContext } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"

export default function SupportRooms() {

    const { roomsSupport, isLoadingSupport } = useContext(Context)

    return (
        <>
            <div className="title tac mb mt-15">{t("Support")}:</div>
            <Rooms rooms={roomsSupport} type="support" isLoading={isLoadingSupport} />
        </>
    )
}
