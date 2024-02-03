export default function CourseBuyBtn({ isCourseHovered, courseLabelColor }) {
    return (
        // isCourseHovered &&
        <div
            className={`fcc h50 ls2 w300 mb-15 bblr5 bbrr5 op0 white fw600 hoverHeight55 ${isCourseHovered ? "courseBuyButtonAnimationFadeIn" : "courseBuyButtonAnimationFadeOut"}`}
            style={{ background: courseLabelColor }}
        >
            BUY
        </div>
    )
}
