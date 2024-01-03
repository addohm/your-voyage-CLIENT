import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoToTop() {

    const [isHovered, isHoveredSet] = useState(false)
    const isVisible = isHovered && window.scrollY
    const location = useLocation().pathname
    const isInMessageLocation = location.includes("/message/")
    const scrollType = isInMessageLocation ? document.body.scrollHeight : 0 // gotoTop / gotoBottom
    const Icon = isInMessageLocation ? KeyboardArrowDown : KeyboardArrowUp

    return (
        <Icon
            style={{ position: 'fixed', zIndex: 99, bottom: 0, right: 0, width: 100, height: 100, padding: 20, border: "1px solid black", borderRadius: 50, transition: "all 1s" }}
            onClick={() => window.scrollTo(0, scrollType)}
            className={isVisible ? "op1 transition15 curPointer" : "op0 transition15"}
            onMouseEnter={() => isHoveredSet(true)}
            onMouseLeave={() => isHoveredSet(false)}
        />
    )
}
