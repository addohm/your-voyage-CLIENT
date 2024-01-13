export default function goToReplyingToMsg(msgText) {
    document.querySelectorAll(".msg").forEach(each => {
        if (each.querySelector(".msgText")?.querySelector("p")?.innerText === msgText) {
            each.scrollIntoView()
            window.scrollBy({ top: -70 }) // +more px up (msgDate spoils the view)
            // found msg => glow
            each.classList.add("glow")
            setTimeout(() => each.classList.remove("glow"), 5000);
        }
    })
}