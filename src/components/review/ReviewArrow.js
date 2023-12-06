import { ArrowBack as Arrow } from '@mui/icons-material';
import Animation from '../animation/Animation';

export default function ReviewArrow({ className, onClick, height, width, animationType }) {
    return (
        <Animation type={animationType}>
            <Arrow className={className} onClick={onClick} style={{ height, width }} />
        </Animation>
    )
}
