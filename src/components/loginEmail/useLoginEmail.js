import { useContext } from "react"
import parseForm from "../../utils/parseForm"
import { Context } from "../../Context"
import axios from "../../utils/axios"
import t from "../../hooks/useT"

export default function useLoginEmail() {

    const { snackbarSet, dialogSet } = useContext(Context)
    const loginText = t("Please confirm login at") + ": "

    async function loginSendEmail(e) {
        e.preventDefault()
        const form = parseForm(e) // get email
        e.target.querySelector("input").value = "" // clear input email
        const res = await axios("/loginSendEmail", { ...form })
        if (!res.ok) return
        dialogSet({ show: false })
        snackbarSet({ show: true, text: loginText, link: form.email, linkText: form.email, linkType: "web", className: "white a_tdu" })
    }

    return (
        { loginSendEmail }
    )
}
