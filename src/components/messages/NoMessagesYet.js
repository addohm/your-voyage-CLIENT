import t from "../../hooks/useT"

export default function NoMessagesYet({ isVisible, className }) {
    return (
        isVisible &&
        <div className={className}>...{t("No messages yet, start a conversation")}</div>
    )
}
