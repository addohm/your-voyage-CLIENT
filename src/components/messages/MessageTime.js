import timestampToTime from "../../utils/timestampToTime";

export default function MessageTime({ isVisible, isUpdated, updatedAt, createdAt, isDeleted, isRestored }) {

    const className = "mla"

    return (
        isVisible &&
        <>
            {(isUpdated && !isDeleted && !isRestored) && <div className={className}>updated: {timestampToTime(updatedAt)}</div>}
            {isDeleted && <div className={className}>deleted: {timestampToTime(updatedAt)}</div>}
            {isRestored && <div className={className}>restored: {timestampToTime(updatedAt)}</div>}
            {(!isUpdated && !isDeleted && !isRestored) && <div className={className}>{timestampToTime(createdAt)}</div>}
        </>
    )
}
