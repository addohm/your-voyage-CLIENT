import { DoneAllRounded } from '@mui/icons-material';

export default function MessageIsRead({ isRead, isVisible, isMyMsg }) {
    return (
        (isVisible && isMyMsg) &&
        <DoneAllRounded className={isRead ? "brand" : "white"} />
    )
}
