import { useContext } from "react"
import { Context } from "../../Context"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import LoginEmail from "../loginEmail/LoginEmail"
import LoginDisplayEmail from "../LoginGoogle/LoginDisplayEmail"
import Or from "../other/Or"
import t from "../../hooks/useT"
import LoginBtn from "./LoginBtn"

export default function HeaderLoginBtn() {

    const { user, totalNotReadNum } = useContext(Context)

    return (
        !user
            ?
            <LoginBtn />
            :
            <LoginDisplayEmail user={user} totalNotReadNum={totalNotReadNum} />
    )
}
