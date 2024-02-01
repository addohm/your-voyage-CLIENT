import { useParams } from "react-router-dom";
import useStripe from "../stripe/useStripe";
import AllMsgsAndAddMsg from "./AllMsgsAndAddMsg";
import MessagesSubscriptionMsg from "./MessagesSubscriptionMsg";
import RenewSubscription from "./RenewSubscription";
import useCheckSubscription from "./useCheckSubscription";

export default function PaidSubscriptionMsgs() {

    const { token } = useParams()
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
        subscription.ok ?
            <>
                <MessagesSubscriptionMsg {...subscription} />
                <AllMsgsAndAddMsg token={token} type="message" />
            </>
            :
            <RenewSubscription
                link={stripeLink}
                btnText="Renew subscription"
                onClick={rewriteSubscriptionInfo}
                {...subscription}
            />
    )
}
