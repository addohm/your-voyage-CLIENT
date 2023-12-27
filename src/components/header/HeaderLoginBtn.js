import { useContext } from "react"
import { Context } from "../../Context"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import LoginEmail from "../loginEmail/LoginEmail"
import LoginDisplayEmail from "../LoginGoogle/LoginDisplayEmail"
import Or from "../other/Or"

export default function HeaderLoginBtn() {

    const { dialogSet, user } = useContext(Context)

    return (
        !user
            ?
            <div
                className='header__btn loginBtn'
                onClick={() => dialogSet({
                    show: true,
                    title: "Login",
                    children: <>
                        <LoginEmail />
                        <Or className="my20" />
                        <LoginGoogle />
                    </>
                })}
            >
                Login
            </div>
            :
            <LoginDisplayEmail user={user} />
    )
}
