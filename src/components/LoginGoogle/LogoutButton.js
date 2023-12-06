import { Button } from "@mui/material"
import useLogin from "./useLoginGoogle"

export default function LogoutButton() {

    const { logout } = useLogin()

    return (
        <Button onClick={logout} variant="outlined" className="mt30 danger border_danger">Log out</Button>
    )
}
