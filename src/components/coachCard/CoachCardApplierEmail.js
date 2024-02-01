import { useContext } from "react"
import { Context } from "../../Context"
import Input from "../form/Input"
import t from "../../hooks/useT";
import useLoginDialog from "../dialog/useLoginDialog";

export default function CoachCardApplierEmail() {

    const { user } = useContext(Context)
    const { showLoginDialog } = useLoginDialog()

    function _showLoginDialog() {
        if (user) return
        showLoginDialog()
    }

    return (
        <Input
            required
            className="mb10 h40 w200"
            name="email"
            placeholder={t("email")}
            onClick={_showLoginDialog}
            defaultValue={user?.email}
            // if there's user hardcode his email to input and disable input
            value={user?.email}
            disabled={user?.email}
        />
    )
}
