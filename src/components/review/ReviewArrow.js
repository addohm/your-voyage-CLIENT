import { ArrowBack as Arrow } from '@mui/icons-material';
import Animation from '../animation/Animation';

export default function ReviewArrow({ isVisible = true, className, onClick, height, width, animationType }) {
    return (
        isVisible &&
        <Animation type={animationType}>
            <Arrow className={className} onClick={onClick} style={{ height, width }} />
        </Animation>
    )
}
