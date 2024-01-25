import { useContext } from "react"
import { Context } from "../../Context"

export default function RoomsTitle() {

    const { user } = useContext(Context)
    const className = "title tac mb"

    return (
        user?.role === "admin" || user?.role === "coach" ?
            <div className={className}>Subscribers:</div>
            :
            <div className={className}>Coaches:</div>
    )
}
