import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";
import Courses from "./Courses";
import t from "../../hooks/useT";

export default function CoachCardApplierApplyBtn() {

    const { dialogSet, user, applierForm } = useContext(Context)
    const dialogTitle = t("Choose your course")
    const isAllFieldsFilled = applierForm && Object.values(applierForm).reduce((acc, curr) => !curr ? acc : acc + 1, 0) === 11 // CoachCardApplier validation: if not filled: currently 11 fields + email

    function showCourseList() {
        if (!isAllFieldsFilled) return
        dialogSet({
            show: true,
            title: <div className="title">{dialogTitle}</div>,
            children: <Courses />
        })
    }

    return (
        <Button
            type="submit"
            variant="contained"
            disabled={!user || !isAllFieldsFilled}
            onClick={showCourseList}
        >
            {t("apply")}
        </Button>
    )
}
