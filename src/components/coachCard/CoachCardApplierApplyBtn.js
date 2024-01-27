import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";
import CoachCardApplierCourseList from "./CoachCardApplierCourseList";
import t from "../../hooks/useT";

export default function CoachCardApplierApplyBtn() {

    const { dialogSet, user, applierForm } = useContext(Context)
    const dialogTitle = t("Choose your course")

    function showCourseList() {
        if (Object.keys(applierForm).length !== 11) return // if not filled: currently 11 fields + email
        dialogSet({
            show: true,
            title: <div className="title">{dialogTitle}</div>,
            children: <CoachCardApplierCourseList />
        })
    }

    return (
        <Button
            type="submit"
            variant="contained"
            disabled={!user}
            onClick={showCourseList}
        >
            {t("apply")}
        </Button>
    )
}
