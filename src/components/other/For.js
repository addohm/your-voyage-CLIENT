import { useContext } from "react"
import { Context } from "../../Context"

export default function For({ role, children }) {

    const { user } = useContext(Context)
    if (!user) return null

    if (user?.role === "admin" && role === "admin") {
        return <>{children}</>
    }

    if (user?.role === "user" && role === "user") {
        return <>{children}</>
    }
}
