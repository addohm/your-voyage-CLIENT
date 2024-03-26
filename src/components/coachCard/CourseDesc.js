import { useContext } from "react"
import { Context } from "../../Context"
import Course from "./Course"
import useCoursesDialog from "./useCoursesDialog"
import MobileDialog from "../dialog/MobileDialog"

export default function CourseDesc(props) {

    const { courseDesc, isLongDesc } = props
    const { dialogSet, lang } = useContext(Context)
    const charsLimit = lang === "en" ? 190 : 110
    const shortDesc = courseDesc?.length <= charsLimit
    const longDesc = (courseDesc?.length > charsLimit) && !isLongDesc
    const { showCoursesDialog } = useCoursesDialog()

    function showCourseWithFullDesc(e) {
        // if courseDesc less than charsLimit chars skip showing new Dialog with LONG courseDesc
        if (shortDesc) return
        e.preventDefault()
        e.stopPropagation()
        // show new Dialog with LONG courseDesc course card
        dialogSet({
            show: true,
            children: <MobileDialog>
                <Course {...props} className="ha pb40 mih400" isLongDesc={true} />
            </MobileDialog>,
            onBack: showCoursesDialog
        })
    }

    return (
        courseDesc &&
        <div
            className={`p10 tac fcc gray ${longDesc ? "cursorArrowRight" : ""}`}
            onClick={showCourseWithFullDesc}
        >
            {isLongDesc ? courseDesc : courseDesc?.slice(0, charsLimit)}
            {(longDesc) && "..."}
        </div>
    )
}
