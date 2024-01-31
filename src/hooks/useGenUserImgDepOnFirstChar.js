import { useContext } from "react"
import { Context } from "../Context"
import genFirstCharColor from "../utils/genFirstCharColor"

export default function useGenUserImgDepOnFirstChar() {

    const { user } = useContext(Context)
    const color = genFirstCharColor(user?.name)

    return (
        <div
            style={{ background: color }}
            className="fcc w40 h40 br50 white"
        >
            <div className="fz20">{user?.name.charAt(0).toUpperCase()}{user?.name.charAt(1)}</div>
        </div>
    )
}
