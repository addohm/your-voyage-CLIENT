import timestampToTime from "../../utils/timestampToTime";

export default function MessageTime({ isVisible, isUpdated, updatedAt, createdAt, isDeleted, isRestored }) {
    return (
        isVisible &&
        <>
            {(isUpdated && !isDeleted && !isRestored) && <div className="mla">updated: {timestampToTime(updatedAt)}</div>}
            {isDeleted && <div className="mla">deleted: {timestampToTime(updatedAt)}</div>}
            {isRestored && <div className="mla">restored: {timestampToTime(updatedAt)}</div>}
            {(!isUpdated && !isDeleted && !isRestored) && <div className="mla">{timestampToTime(createdAt)}</div>}
        </>
    )
}
