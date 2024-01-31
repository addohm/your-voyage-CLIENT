import { Button, TextField } from "@mui/material"
import useLoginEmail from "./useLoginEmail"
import t from "../../hooks/useT"

export default function LoginEmail() {

    const { loginSendEmail } = useLoginEmail()

    return (
        <form className="fc g30 aic" onSubmit={loginSendEmail}>
            <TextField
                required
                name="email"
                type="email"
                label={t("email")}
                helperText={t("You will get email notification")}
            />
            <Button type="submit" variant="contained">{t("Login")}</Button>
        </form>
    )
}
