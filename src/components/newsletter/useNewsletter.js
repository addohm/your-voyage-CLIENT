import { useContext, useEffect, useState } from "react"
import axios from "../../utils/axios"
import { Context } from "../../Context"

export default function useNewsletter() {

    const [isSubscribedToNewsletter, isSubscribedToNewsletterSet] = useState(null)
    const { user } = useContext(Context)

    useEffect(() => {
        async function checkNewsletter() {
            const res = await axios("/getPost", { type: "newsletter", userId: user?._id })
            if (!res) return
            isSubscribedToNewsletterSet(res)
        }

        checkNewsletter()
    }, [])

    return { isSubscribedToNewsletter }
}
