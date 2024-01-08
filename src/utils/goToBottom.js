export default function goToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}