import { useContext } from "react"
import parseForm from "../../utils/parseForm"
import * as api from "./api"
import { Context } from "../../Context"

export default function useLoginEmail() {

    const { snackbarSet, dialogSet } = useContext(Context)

    async function loginSendEmail(e) {
        e.preventDefault()
        const form = parseForm(e) // get email
        e.target.querySelector("input").value = "" // clear input email
        const res = await api.loginSendEmail(form)
        if (!res.ok) return
        dialogSet({ show: false })
        snackbarSet({ show: true, text: "Please confirm login at: ", link: form.email, linkText: form.email, linkType: "web" })
    }

    return (
        { loginSendEmail }
    )
}
