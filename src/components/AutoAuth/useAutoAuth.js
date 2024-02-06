import { useEffect, useState } from "react"
// api
import axios from "../../utils/axios"

export default function useAutoAuth() {

    // ! user
    const [user, userSet] = useState(null) // NULL: initial state; FALSE: no user; <hasUser>: {<objWithSomeUserInfo>}

    // ! autoAuth
    useEffect(() => {
        async function autoAuth() {
            const token = localStorage.getItem("token")
            if (token) { // if user logged in => auto auth on every reload
                const res = await axios("/autoAuth", { token })
                res?.user && userSet(res?.user)
            } else {
                userSet(false)
            }
        }

        autoAuth()
    }, [])

    return { user, userSet }
}
