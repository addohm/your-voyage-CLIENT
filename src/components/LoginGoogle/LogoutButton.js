import { Button } from "@mui/material"
import useLogin from "./useLoginGoogle"
import t from "../../hooks/useT"

export default function LogoutButton() {

    const { logout } = useLogin()

    return (
        <Button onClick={logout} variant="outlined" className="mt30 danger border_danger">{t("log out")}</Button>
    )
}
