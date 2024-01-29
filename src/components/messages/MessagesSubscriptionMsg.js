import t from "../../hooks/useT"

export default function MessagesSubscriptionMsg({ daysLeft, nextSubscriptionDate }) {
    return (
        <div className="tac mb45 fz14">
            {t("Days left")}: {daysLeft} ~ {t("Next subscription date")}: {nextSubscriptionDate}
        </div>
    )
}
