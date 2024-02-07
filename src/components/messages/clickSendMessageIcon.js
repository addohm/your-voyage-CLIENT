export default function clickSendMessageIcon() {
    // ! saveUpdatedMsgIcon || sendMsgIcon
    const icon = document.querySelector(".saveUpdatedMsgIcon") || document.querySelector(".sendMsgIcon")
    if (!icon) return
    // if (!messages[0]?.msg) alert("The first file should have text!")
    const clickEvent = new Event('click', { bubbles: true })
    icon.dispatchEvent(clickEvent)
}