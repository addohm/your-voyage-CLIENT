import { Button } from "@mui/material"
import useNewsletter from "./useNewsletter"
import axios from "../../utils/axios"
import t from "../../hooks/useT"

export default function Newsletter() {

    const { isSubscribedToNewsletter } = useNewsletter()

    function subUnSubNewsletter() {
        axios("/subUnSubNewsletter")
        window.location.reload()
    }

    return (
        <>

            <div className="title tac mb30">{t("Newsletter")}:</div>
            {isSubscribedToNewsletter
                ?
                <div className="tac mb">{t("You're subscribed to our newsletter")}!</div>
                :
                <div className="tac mb">{t("Subscribe to our newsletter")}!</div>}
            <Button
                variant="contained"
                onClick={subUnSubNewsletter}
                className={`${isSubscribedToNewsletter ? "bg_danger2" : ""}`}
            >
                {isSubscribedToNewsletter ? t("Unsubscribe") : t("Subscribe")}
            </Button>
        </>
    )
}
