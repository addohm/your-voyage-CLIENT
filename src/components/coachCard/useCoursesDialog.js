import { useContext } from "react"
import { Context } from "../../Context"
import t from "../../hooks/useT"
import Courses from "./Courses"
import MobileDialog from "../dialog/MobileDialog"

export default function useCoursesDialog() {

    const { dialogSet } = useContext(Context)
    const dialogTitle = t("Choose your course") + ":"

    function showCoursesDialog() {
        dialogSet({
            show: true,
            title: <div className="title">{dialogTitle}</div>,
            children: <MobileDialog>
                <Courses />
            </MobileDialog>
        })
    }

    return { showCoursesDialog }
}
