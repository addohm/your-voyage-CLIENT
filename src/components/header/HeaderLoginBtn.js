import { useContext } from "react"
import { Context } from "../../Context"
import LoginDisplayEmail from "../LoginGoogle/LoginDisplayEmail"
import LoginBtn from "./LoginBtn"

export default function HeaderLoginBtn() {

    const { user, totalNotReadNum, totalNotReadNumSupport } = useContext(Context)

    return (
        !user
            ?
            <LoginBtn />
            :
            <LoginDisplayEmail user={user} totalNotReadNum={totalNotReadNum} totalNotReadNumSupport={totalNotReadNumSupport} />
    )
}
