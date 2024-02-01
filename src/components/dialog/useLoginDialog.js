import { useContext } from "react"
import { Context } from "../../Context"
import LoginEmail from "../loginEmail/LoginEmail"
import Or from "../other/Or"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import t from "../../hooks/useT"

export default function useLoginDialog() {

    const { dialogSet } = useContext(Context)
    const loginTitle = t("Login")
    const orTitle = t("OR")

    function showLoginDialog() {
        dialogSet({
            show: true,
            title: loginTitle,
            children: <>
                <LoginEmail />
                <Or text={orTitle} className="my20" />
                <LoginGoogle />
            </>
        })
    }

    return { showLoginDialog, loginTitle }
}
