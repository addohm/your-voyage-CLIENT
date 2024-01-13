export default function NoMessagesYet({ isVisible, className }) {
    return (
        isVisible &&
        <div className={className}>...No messages yet, start a conversation</div>
    )
}
