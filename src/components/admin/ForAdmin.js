import { useContext } from "react"
import { Context } from "../../Context"

export default function ForAdmin({ children }) {
    const { user } = useContext(Context)
    return user?.role === "admin" && <>{children}</>
}
