export default function goToBottom() {
    setTimeout(() => { // wait till MessageReply loads
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }, 300);
}