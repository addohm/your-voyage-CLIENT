export default function CourseLabel({ isCourseHovered, courseLabel, courseLabelColor, isHovered }) {
    return (
        <div
            style={{ background: courseLabelColor, opacity: isHovered ? 0.7 : 1 }}
            className={`fcc h50 ls2 w100p bg_green btrr5 btlr5 white ttu fw600 ${isCourseHovered ? "courseLabelAnimationFadeOut" : "courseLabelAnimationFadeIn"} `}
        >
            {courseLabel}
        </div>
    )
}
