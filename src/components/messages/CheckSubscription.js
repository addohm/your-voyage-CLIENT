import { useEffect, useState } from "react"
import axios from "../../utils/axios"
import RenewSubscription from "./RenewSubscription"
import For from "../other/For"

export default function CheckSubscription() {

    const [subscription, subscriptionSet] = useState({ ok: "", msg: "", error: "" })

    useEffect(() => {
        async function checkSubscriptionForCoaching() {
            const res = await axios("/checkSubscriptionForCoaching")
            res && subscriptionSet(res)
            !res && subscriptionSet({ error: "Something went wrong! Please try again!" })
        }

        checkSubscriptionForCoaching()
    }, [])

    const { ok, msg, error } = subscription

    return (
        <For role="user">
            <div className="tac mb40">
                <div className="mb15">{msg}</div>
                {error && <div>{error}</div>}
                <RenewSubscription ok={ok} />
            </div>
        </For>
    )
}
