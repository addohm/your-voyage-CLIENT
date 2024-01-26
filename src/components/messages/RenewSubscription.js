import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function RenewSubscription({ link, btnText, ok, msg, error, onClick }) {
    return (
        ok === false &&
        <Link to={link}>
            {error && <div className="tac mb danger">{error}</div>}
            <div className="tac mb">{msg}</div>
            <Button
                variant="contained"
                onClick={onClick}
            >
                {btnText}
            </Button>
            {/* margin only works this way */}
            <div className="mb15"></div>
        </Link>
    )
}
