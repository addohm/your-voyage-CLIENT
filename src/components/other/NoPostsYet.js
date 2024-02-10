import t from "../../hooks/useT"

export default function NoPostsYet({ isVisible }) {
    return (
        isVisible &&
        <div className="title2 w100p tac mt gray">{t("No posts yet")} ...</div>
    )
}
