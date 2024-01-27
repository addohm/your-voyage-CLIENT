import { useParams } from "react-router-dom";
import Socket from "./Socket";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context";
import axios from "../../utils/axios";
import OldDbMessages from "./OldDbMessages";
import MessageDate from "./MessageDate";
import NoMessagesYet from "./NoMessagesYet";
import useCheckSubscription from "./useCheckSubscription";
import RenewSubscription from "./RenewSubscription";
import useStripe from "../stripe/useStripe";

export default function SocketHub() {

    const { token } = useParams()
    const { dbMessages, dbMessagesSet, user, oldDbMessages, skipOldDbMessagesSet } = useContext(Context)
    const [msgCurTopDate, msgCurTopDateSet] = useState(null)

    useEffect(() => { // mark all messages as read when enter the room
        axios("/markAllMessagesAsRead", { room: token, userId: user?._id })
    }, [])

    const { subscription } = useCheckSubscription({ type: "one", room: token })
    const { stripeLink } = useStripe(subscription?.courseId)

    function rewriteSubscriptionInfo() {
        // rewrite coachCard clicked courseId/courseName with Stripe Payment Info (Renew Subscription)
        const newCoachCard = JSON.parse(localStorage.getItem("coachCard"))
        newCoachCard.courseId = subscription?.courseId
        newCoachCard.courseName = subscription?.courseName
        localStorage.setItem("coachCard", JSON.stringify(newCoachCard))
    }

    return (
        subscription.ok
            ?
            <div className="por">
                <div className="tac mb45 fz14">{subscription?.msg}</div>
                <MessageDate msgCurTopDate={msgCurTopDate} />
                <OldDbMessages oldDbMessages={oldDbMessages} skipOldDbMessagesSet={skipOldDbMessagesSet} msgCurTopDateSet={msgCurTopDateSet} />
                {/* NEW DB messages */}
                <Messages messageReceived={dbMessages} msgCurTopDateSet={msgCurTopDateSet} />
                <NoMessagesYet isVisible={dbMessages?.length === 0} className="fcc aic mb" />
                <Socket room={token} dbMessagesSet={dbMessagesSet} />
            </div>
            :
            <RenewSubscription
                link={stripeLink}
                btnText="RENEW SUBSCRIPTION"
                onClick={rewriteSubscriptionInfo}
                {...subscription}
            />
    )
}
