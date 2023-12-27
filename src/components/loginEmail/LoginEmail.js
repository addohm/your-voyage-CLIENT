import { Button, TextField } from "@mui/material"
import useLoginEmail from "./useLoginEmail"

export default function LoginEmail() {

    const { loginSendEmail } = useLoginEmail()

    return (
        <form className="fc g30 aic" onSubmit={loginSendEmail}>
            <TextField
                required
                name="email"
                type="email"
                label="email"
                helperText="You will get email notification. Please confirm it. Be sure to check SPAM folder!"
            />
            <Button type="submit" variant="contained">Sign in</Button>
        </form>
    )
}
