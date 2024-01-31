import { useContext } from "react"
import { Context } from "../../Context"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import LoginEmail from "../loginEmail/LoginEmail"
import LoginDisplayEmail from "../LoginGoogle/LoginDisplayEmail"
import Or from "../other/Or"
import t from "../../hooks/useT"

export default function HeaderLoginBtn() {

    const { dialogSet, user, totalNotReadNum } = useContext(Context)
    const loginTitle = t("Login")
    const orTitle = t("OR")

    return (
        !user
            ?
            <div
                className='header__btn loginBtn'
                onClick={() => dialogSet({
                    show: true,
                    title: loginTitle,
                    children: <>
                        <LoginEmail />
                        <Or text={orTitle} className="my20" />
                        <LoginGoogle />
                    </>
                })}
            >
                {loginTitle}
            </div>
            :
            <LoginDisplayEmail user={user} totalNotReadNum={totalNotReadNum} />
    )
}
