import { KeyboardArrowUp, KeyboardArrowDown, PlayArrow as MobileUp } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from '../../hooks/useWindowSize';

export default function GoToTop() {

    const [isHovered, isHoveredSet] = useState(false)
    const isVisible = isHovered && window.scrollY
    const isVisibleMobile = window.scrollY
    const location = useLocation().pathname
    const isInMessageLocation = location.includes("/message/")
    const scrollType = isInMessageLocation ? document.body.scrollHeight : 0 // gotoTop / gotoBottom
    const Icon = isInMessageLocation ? KeyboardArrowDown : KeyboardArrowUp
    const { isMobile } = useWindowSize()

    return (
        !isMobile
            ?
            <Icon
                style={{ position: 'fixed', zIndex: 99, bottom: 0, right: 0, width: 100, height: 100, padding: 20, border: "1px solid black", borderRadius: 50, transition: "all 1s" }}
                onClick={() => window.scrollTo(0, scrollType)}
                className={isVisible ? "op1 transition15 curPointer" : "op0 transition15"}
                onMouseEnter={() => isHoveredSet(true)}
                onMouseLeave={() => isHoveredSet(false)}
            />
            :
            <MobileUp
                className={isVisibleMobile ? "op1 transition15 curPointer" : "op0 transition15"}
                style={{ position: 'fixed', zIndex: 99, bottom: 0, right: 0, width: 50, height: 50, padding: 0, transition: "all 1s", transform: !isInMessageLocation ? "rotate(-90deg)" : "rotate(90deg)" }}
                onClick={() => window.scrollTo(0, scrollType)}
            />
    )
}
