import Rooms from "../messages/Rooms";
import { useContext } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"

export default function SupportRooms() {

    const { roomsSupport } = useContext(Context)

    return (
        <>
            <div className="title tac mb">{t("Support")}:</div>
            <Rooms rooms={roomsSupport} type="support" />
        </>
    )
}
