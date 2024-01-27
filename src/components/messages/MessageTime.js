import timestampToTime from "../../utils/timestampToTime";
import t from "../../hooks/useT"

export default function MessageTime({ isVisible, isUpdated, updatedAt, createdAt, isDeleted, isRestored }) {

    const className = "mla"

    return (
        isVisible &&
        <>
            {(isUpdated && !isDeleted && !isRestored) && <div className={className}>{t("updated")}: {timestampToTime(updatedAt)}</div>}
            {isDeleted && <div className={className}>{t("deleted")} : {timestampToTime(updatedAt)}</div>}
            {isRestored && <div className={className}>{t("restored")}: {timestampToTime(updatedAt)}</div>}
            {(!isUpdated && !isDeleted && !isRestored) && <div className={className}>{timestampToTime(createdAt)}</div>}
        </>
    )
}
