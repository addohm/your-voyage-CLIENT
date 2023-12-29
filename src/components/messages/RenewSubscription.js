import { Button } from "@mui/material"
import goToCoach from "../../utils/goToCoach"
import { Link } from "react-router-dom"
import { MAIN_ROUTE } from "../../utils/consts"

export default function RenewSubscription({ ok }) {
    return (
        ok === false &&
        <Link to={MAIN_ROUTE}>
            <Button
                variant="contained"
                onClick={() => setTimeout(() => goToCoach(), 1000)}
            >
                SUBSCRIBE
            </Button>
        </Link>
    )
}
