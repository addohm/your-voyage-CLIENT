export default function CourseLabel({ isCourseHovered, courseLabel, courseLabelColor, isHovered }) {
    return (
        <div
            style={{ background: courseLabelColor, opacity: isHovered ? 0.7 : 1 }}
            className={`fcc h40 w100p bg_green btrr5 btlr5 white ls2 ttu fw600 ${isCourseHovered ? "courseLabelAnimationFadeOut" : ""} `}
        >
            {courseLabel}
        </div>
    )
}
