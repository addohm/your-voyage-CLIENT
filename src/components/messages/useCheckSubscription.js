import { useEffect, useState } from "react"
import axios from "../../utils/axios"

// type: all/one
// all checks if user has active subscription at all for at least one coaching
// one checks if user has active subscription for one EXACT coaching (using room prop)
// then:
// for type all RenewSubscription: go to main page, CREATE NEW coaching
// for type one RenewSubscription: renew (update in DB) this EXACT coaching

export default function useCheckSubscription({ type, room }) {

    const [subscription, subscriptionSet] = useState({}) // { ok, msg, error, courseName }

    useEffect(() => {
        async function checkSubscriptionForCoaching() {
            const res = await axios("/checkSubscriptionForCoaching", { type, room })
            res && subscriptionSet(res)
            !res && subscriptionSet({ error: "Something went wrong! Please try again!" })
        }

        checkSubscriptionForCoaching()
    }, [])

    return { subscription }
}
