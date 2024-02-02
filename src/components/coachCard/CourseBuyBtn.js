export default function CourseBuyBtn({ isCourseHovered, courseLabelColor }) {
    return (
        isCourseHovered &&
        <div
            className={`fcc h36 w300 mb-15 bblr5 bbrr5 op0 white fw600 courseLabelAnimationFadeIn`}
            style={{ background: courseLabelColor }}
        >
            BUY
        </div>
    )
}
