import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../../Context"
import axios from "../../utils/axios"
import { MESSAGES_ROUTE } from "../../utils/consts"
import t from "../../hooks/useT"

export default function VerifyOrderToken() { // came from Stripe successful payment

    const { token } = useParams()
    const navigate = useNavigate()
    const { dialogSet, user } = useContext(Context)
    const okDialogTitle = t("Subscription activated") + "!"
    const okDialogBody = t("Thank you") + "!"

    useEffect(() => {
        async function verifyOrderToken() {
            // if user is redirected to "/verifyOrderToken" page, he gets orderToken, 
            // then client makes app.post("/applyForCoaching") from "/verifyOrderToken" page
            // then if token verified => create order in DB
            let form = JSON.parse(localStorage.getItem("coachCard"))
            form.userId = user?._id
            if (!user) return
            const res = await axios("/applyForCoaching", { ...form, token, type: "coaching" })

            // ! error
            if (!res) {
                dialogSet({
                    show: true,
                    title: "Error!",
                    children: "Please try again one more time!"
                })
                return
            }

            // ! ok
            navigate(MESSAGES_ROUTE)
            dialogSet({
                show: true,
                title: okDialogTitle,
                children: okDialogBody
            })
        }

        verifyOrderToken()
    }, [user])

    return (
        ""
    )
}
