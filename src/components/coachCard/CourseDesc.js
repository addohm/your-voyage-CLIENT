import { useContext } from "react"
import { Context } from "../../Context"
import Course from "./Course"
import useCoursesDialog from "./useCoursesDialog"

export default function CourseDesc(props) {

    const { courseDesc, isLongDesc } = props
    const { dialogSet } = useContext(Context)
    const charsLimit = 150
    const shortDesc = courseDesc?.length <= charsLimit
    const longDesc = (courseDesc?.length > charsLimit) && !isLongDesc
    const { showCoursesDialog } = useCoursesDialog()

    function showCourseWithFullDesc(e) {
        // if courseDesc less than charsLimit chars skip showing new Dialog with LONG courseDesc
        if (shortDesc) return
        e.preventDefault()
        e.stopPropagation()
        dialogSet({
            show: true,
            children: <Course {...props} className="ha pb90 mih400" isLongDesc={true} />,
            onBack: showCoursesDialog
        })
    }

    return (
        courseDesc &&
        <div
            className={`tac fcc gray ${longDesc ? "cursorArrowRight" : ""}`}
            onClick={showCourseWithFullDesc}
        >
            {isLongDesc ? courseDesc : courseDesc?.slice(0, charsLimit)}
            {(longDesc) && "..."}
        </div>
    )
}
