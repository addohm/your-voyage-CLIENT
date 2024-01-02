import timestampToTime from "../../utils/timestampToTime";

export default function MessageTime({ isUpdated, updatedAt, createdAt, isDeleted }) {
    return (
        <>
            {(isUpdated && !isDeleted) && <div className="mla">updated: {timestampToTime(updatedAt)}</div>}
            {isDeleted && <div className="mla">deleted: {timestampToTime(updatedAt)}</div>}
            {(!isUpdated && !isDeleted) && <div className="mla">{timestampToTime(createdAt)}</div>}
        </>
    )
}
