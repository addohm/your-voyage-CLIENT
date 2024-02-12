import { useContext } from "react"
import { Context } from "../../Context"
import LoginEmail from "../loginEmail/LoginEmail"
import Or from "../other/Or"
import LoginGoogle from "../LoginGoogle/LoginGoogle"
import t from "../../hooks/useT"
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../../utils/consts"

export default function useLoginDialog() {

    const { dialogSet } = useContext(Context)
    const loginTitle = t("Login")
    const orTitle = t("OR")
    const navigate = useNavigate()

    function showLoginDialog() {
        dialogSet({
            show: true,
            title: loginTitle,
            onClose: () => navigate(MAIN_ROUTE),
            children: <>
                <LoginEmail />
                <Or text={orTitle} className="my20" />
                <LoginGoogle />
            </>
        })
    }

    return { showLoginDialog, loginTitle }
}
