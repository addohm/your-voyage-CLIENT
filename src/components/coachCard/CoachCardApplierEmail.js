import { useContext } from "react"
import { Context } from "../../Context"
import Input from "../form/Input"
import t from "../../hooks/useT";

export default function CoachCardApplierEmail() {

    const { user } = useContext(Context)

    function clickLoginBtn() {
        if (user) return
        document.querySelector(".loginBtn").click()
    }

    return (
        <Input
            required
            className="mb10 h40 w200"
            name="email"
            placeholder={t("email")}
            onClick={clickLoginBtn}
            defaultValue={user?.email}
            // if there's user hardcode his email to input and disable input
            value={user?.email}
            disabled={user?.email}
        />
    )
}
