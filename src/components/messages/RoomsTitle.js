import { useContext } from "react"
import { Context } from "../../Context"

export default function RoomsTitle() {

    const { user } = useContext(Context)
    const className = "title tac mb mt-20"

    return (
        user?.role === "admin" ?
            <div className={className}>Subscribers:</div>
            :
            <div className={className}>Coaches:</div>
    )
}
