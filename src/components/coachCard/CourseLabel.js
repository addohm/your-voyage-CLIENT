import genFirstCharColor from "../../utils/genFirstCharColor"

export default function CourseLabel({ courseLabel, isHovered }) {

    !courseLabel && (courseLabel = "NEW");
    const color = genFirstCharColor(courseLabel)

    return (
        <div
            style={{ background: color, opacity: isHovered ? 0.7 : 1 }}
            className="fcc h40 w100p bg_green btrr20 btlr20 white ls2 ttu fw600"
        >
            {courseLabel}
        </div>
    )
}
