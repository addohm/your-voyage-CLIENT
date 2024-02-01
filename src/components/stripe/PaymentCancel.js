import { useNavigate } from "react-router-dom"
import { SUPPORTS_ROUTE } from "../../utils/consts"
import { useContext, useEffect } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"

export default function PaymentCancel() {

    const navigate = useNavigate()

    const { dialogSet } = useContext(Context)
    const dialogTitle = t("If you have any questions")
    const dialogBody = t("Please contact us") + "!"

    useEffect(() => {
        navigate(SUPPORTS_ROUTE)
        dialogSet({
            show: true,
            title: dialogTitle,
            children: dialogBody,
        })
    }, [])

    return ""
}
