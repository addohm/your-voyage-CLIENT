import { DoneAllRounded } from '@mui/icons-material';

export default function MessageIsRead({ isRead, isVisible, isMyMsg }) {
    return (
        (isVisible && isMyMsg) &&
        <DoneAllRounded style={{ color: isRead ? "green" : "gray" }} />
    )
}
