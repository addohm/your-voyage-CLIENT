import Rooms from "../messages/Rooms";
import { useContext } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"
import AdminAlert from "../admin/AdminAlert";

export default function SupportRooms() {

    const { roomsSupport, isLoadingSupport } = useContext(Context)

    return (
        <>
            <AdminAlert />
            <div className="title tac mb mt-15">{t("Support")}:</div>
            <Rooms rooms={roomsSupport} type="support" isLoading={isLoadingSupport} />
        </>
    )
}
