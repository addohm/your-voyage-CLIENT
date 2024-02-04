export default function CourseBuyBtn({ isCourseHovered, courseLabelColor }) {
    return (
        // isCourseHovered &&
        <div
            className={`poa b-15 fcc h50 ls2 w300 bblr5 bbrr5 op0 white fw600 hoverHeight55 ${isCourseHovered ? "courseBuyButtonAnimationFadeIn" : "courseBuyButtonAnimationFadeOut"}`}
            style={{ background: courseLabelColor }}
        >
            BUY
        </div>
    )
}
