import { useEffect, useState } from "react"
// api
import axios from "../../utils/axios"

export default function useAutoAuth() {

    // ! user
    const [user, userSet] = useState(null) // null || {}

    // ! autoAuth
    useEffect(() => {
        async function autoAuth() {
            const token = localStorage.getItem("token")
            if (token) { // if user logged in => auto auth on every reload
                const res = await axios("/autoAuth", { token })
                res?.user && userSet(res?.user)
            }
        }

        autoAuth()
    }, [])

    return { user, userSet }
}
