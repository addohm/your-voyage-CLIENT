export default () => {
    document.querySelector(".coach").scrollIntoView({ behavior: "smooth" }); 
    setTimeout(() => { document.querySelector(".coach").scrollIntoView({ behavior: "smooth" }) }, 2000)
}
