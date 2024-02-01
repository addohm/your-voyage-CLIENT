export default () => {
    const applierCard = document.querySelector(".applier")
    applierCard.scrollIntoView({ behavior: "smooth" })
    setTimeout(() => {
        window.scrollBy({ top: -90, behavior: 'smooth' })
        applierCard.querySelector(`[type="submit"]`).click()
    }, 2000);
    // UNCOMMENT with "many animation" setTimeout(() => { document.querySelector(".coach").scrollIntoView({ behavior: "smooth" }) }, 2000)
}
