import { useContext } from "react"
import { Context } from "../../Context"
import Course from "./Course"
import useCoursesDialog from "./useCoursesDialog"
import DialogIcons from "../dialog/DialogIcons"

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
        // show new Dialog with LONG courseDesc course card
        dialogSet({
            show: true,
            children: <div className="fc">
                <Course {...props} className="ha pb40 mih400" isLongDesc={true} />
                {/* add additional close icon on mobile: top mobile native (android) menu can hide top dialog icons */}
                <DialogIcons className="wfc por cx" closeIconClassName="visibleOnMobile mt15" />
            </div>,
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
