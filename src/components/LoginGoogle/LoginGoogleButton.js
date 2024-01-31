import { Button } from "@mui/material"
import useLogin from "./useLoginGoogle"
import t from "../../hooks/useT"

export default function LoginGoogleButton({ user }) {

    const { signInWithGoogle } = useLogin()

    return (
        !user &&
        <Button
            variant="contained"
            onClick={signInWithGoogle}
            style={{ background: "#1976D2" }}
        >
            {t("Sign in with Google")}
        </Button>
    )
}
