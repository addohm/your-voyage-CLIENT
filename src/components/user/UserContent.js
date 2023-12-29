import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MESSAGES_ROUTE } from "../../utils/consts";

export default function UserContent() {
    return (
        <Link to={MESSAGES_ROUTE}>
            <Button style={{ marginBottom: 10 }} variant='outlined'>coaching</Button>
        </Link>
    )
}
