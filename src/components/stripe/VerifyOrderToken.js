import { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../../Context"
import axios from "../../utils/axios"
import { MAIN_ROUTE, MESSAGES_ROUTE } from "../../utils/consts"

export default function VerifyOrderToken() {

    const { token } = useParams()
    const navigate = useNavigate()
    const { dialogSet } = useContext(Context)

    useEffect(() => {
        async function verifyOrderToken() {
            // if user is redirected to "/verifyOrderToken" page, he gets orderToken, 
            // then client makes app.post("/applyForCoaching") from "/verifyOrderToken" page
            // then if token verified => create order in DB
            const form = JSON.parse(localStorage.getItem("coachCard"))
            const res = await axios("/applyForCoaching", { ...form, token, type: "coaching", coachEmail: "sendtshop@gmail.com" }) // TODO !!!

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
                title: "Order created!",
                children: res.msg
            })
        }

        verifyOrderToken()
    }, [token])

    return (
        ""
    )
}
