import { PlayArrow as UpIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

export default function GoToTop() {

    const isVisible = window.scrollY
    const location = useLocation().pathname
    const isInMessageLocation = location.includes("/message/") || location.includes("/support/")
    const scrollType = isInMessageLocation ? document.body.scrollHeight : 0 // gotoTop / gotoBottom

    return (
        <UpIcon
            className={isVisible ? "op1 blurAnim curPointer" : "op0 blurAnim"}
            style={{ position: 'fixed', zIndex: 8, bottom: 0, right: 0, width: 50, height: 50, padding: 0, transition: "all ease 0.3s", transform: !isInMessageLocation ? "rotate(-90deg)" : "rotate(90deg)" }}
            onClick={() => window.scrollTo(0, scrollType)}
        />
    )
}
