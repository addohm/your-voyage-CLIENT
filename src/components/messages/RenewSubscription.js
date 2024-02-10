import { Button } from "@mui/material"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../Context"
import t from "../../hooks/useT"
import HaveQuestions from "./HaveQuestions"

export default function RenewSubscription({ link, btnText, ok, msg, error, onClick }) {

    // admin or coach don't need subscription
    const { user } = useContext(Context)
    if (user?.role === "admin" || user?.role === "coach") {
        ok = true
    }

    return (
        ok === false &&
        <>
            <HaveQuestions />
            <Link to={link}>
                {error && <div className="tac mb danger">{error}</div>}
                {/* <div className="tac mb">{t(msg)}</div> */}
                <Button
                    variant="contained"
                    onClick={onClick}
                >
                    {t(btnText)}
                </Button>
                {/* margin only works this way */}
                <div className="mb30"></div>
            </Link>
        </>
    )
}
