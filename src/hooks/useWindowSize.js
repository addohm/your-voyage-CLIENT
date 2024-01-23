import { useEffect, useState } from "react";
import { MOBILE_WIDTH } from "../utils/consts";

export default function useWindowSize() {

    const [windowWidth, windowWidthSet] = useState(window.innerWidth);
    const [isMobile, isMobileSet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth <= MOBILE_WIDTH ? isMobileSet(true) : isMobileSet(false)
            windowWidthSet(window.innerWidth)
        }
        handleResize() // initial call to set values on component load
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { windowWidth, isMobile }
}
