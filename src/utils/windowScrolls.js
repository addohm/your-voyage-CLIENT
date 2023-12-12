export default function windowScrolls() {

    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const isScrolledToWindowBottom = windowHeight + scrollTop === documentHeight

    return { windowHeight, scrollTop, documentHeight, isScrolledToWindowBottom }
}
