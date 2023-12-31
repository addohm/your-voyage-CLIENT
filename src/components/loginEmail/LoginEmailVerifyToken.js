import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { MAIN_ROUTE } from "../../utils/consts"

export default function VerifyLoginToken() {

    const { token } = useParams()

    useEffect(() => {
        function verifyLoginToken() {
            // * user gets email, clicks "verify", redicted to this page, token written to localStorage, reload page (user authed by autoAuth)
            localStorage.setItem("token", token)
            window.location.href = MAIN_ROUTE
        }

        verifyLoginToken()
    }, [])

    return (
        ""
    )
}
