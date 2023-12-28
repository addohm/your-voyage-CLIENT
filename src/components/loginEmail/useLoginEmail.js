import { useContext } from "react"
import parseForm from "../../utils/parseForm"
import { Context } from "../../Context"
import axios from "../../utils/axios"

export default function useLoginEmail() {

    const { snackbarSet, dialogSet } = useContext(Context)

    async function loginSendEmail(e) {
        e.preventDefault()
        const form = parseForm(e) // get email
        e.target.querySelector("input").value = "" // clear input email
        const res = await axios("/loginSendEmail", { ...form })
        if (!res.ok) return
        dialogSet({ show: false })
        snackbarSet({ show: true, text: "Please confirm login at: ", link: form.email, linkText: form.email, linkType: "web" })
    }

    return (
        { loginSendEmail }
    )
}
