import { useEffect, useState } from "react"
// api
import * as api from "./api"

export default function useAutoAuth() {

    // ! user
    const [user, userSet] = useState(null) // null || {}

    // ! autoAuth
    useEffect(() => {
        async function autoAuth() {
            const token = localStorage.getItem("token")
            if (token) { // if user logged in => auto auth on every reload
                const res = await api.autoAuth(token)
                res?.user && userSet(res?.user)
            }
        }

        autoAuth()
    }, [])

    return { user, userSet }
}
