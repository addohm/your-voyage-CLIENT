import { useEffect, useState } from "react";

export default function useWindowSize() {

    const [windowWidth, windowWidthSet] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => windowWidthSet(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { windowWidth }
}
