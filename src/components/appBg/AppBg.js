import { useEffect, useRef, useState } from "react";
import { BgText } from "../bgText/BgText";
import Diamonds from "../diamond/Diamonds";
import windowScrolls from "../../utils/windowScrolls";
import useWindowSize from "../../hooks/useWindowSize";

export default function AppBg() {

    // ! rotate Diamonds
    const [rotate, rotateSet] = useState(50); // Initial font size (adjust as needed)

    useEffect(() => {
        const handleScroll = () => {
            // Increase rotate for every pixel scrolled            
            const newRotate = 16 + (window.scrollY * 0.05)
            rotateSet(newRotate)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    // ! move BgText
    const ref = useRef(null)
    const [move, moveSet] = useState(0)
    const isBgTextVisible = window.scrollY > ref?.current?.offsetTop
    const isDiamondsVisible = window.scrollY > ref?.current?.offsetTop - 1000 // 1k px earlier than BgText

    useEffect(() => {
        if (isBgTextVisible) { // !
            // later use: -window.innerWidth
            // +50px to center text
            moveSet(-1920 + 50 + window.scrollY - ref?.current?.offsetTop)
        }

    }, [window.scrollY])

    // ! isScrolledToVeryBottom
    const [isScrolledToVeryBottom, isScrolledToVeryBottomSet] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const { isScrolledToWindowBottom } = windowScrolls()

            // Check if scrolled to the very bottom of the page
            if (isScrolledToWindowBottom) {
                isScrolledToVeryBottomSet(true)
            } else {
                isScrolledToVeryBottomSet(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [window.scrollY])

    // ! show only for 1920p
    const { windowWidth } = useWindowSize()
    if (windowWidth < 1920 || windowWidth > 1920) return

    return (
        <div ref={ref} className={`por h300vh ${isDiamondsVisible ? "op1" : "op0 zi0"}`}>
            <BgText move={move} changePoint={isScrolledToVeryBottom} className={`${isBgTextVisible ? "op1" : "op0 zi0"}`} />
            <Diamonds rotate={rotate} isScrolledToVeryBottom={isScrolledToVeryBottom} className={`${isDiamondsVisible ? "op1" : "op0 zi0"}`} />
        </div>
    )
}
