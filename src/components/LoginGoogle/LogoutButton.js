import { Button } from "@mui/material"
import useLogin from "./useLoginGoogle"

export default function LogoutButton({ user, isUserEmailHovered }) {

    const { logout } = useLogin()

    return (
        user && isUserEmailHovered &&
        <div className="poa w100p bg_white py15 brL">
            <Button onClick={logout} variant="contained" className="mt30 danger">Log out</Button>
        </div>
    )
}
