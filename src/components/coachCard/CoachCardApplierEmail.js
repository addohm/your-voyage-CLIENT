import { useContext } from "react"
import { Context } from "../../Context"
import Input from "../form/Input"

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
            placeholder="email"
            onClick={clickLoginBtn}
            defaultValue={user?.email}
        />
    )
}
