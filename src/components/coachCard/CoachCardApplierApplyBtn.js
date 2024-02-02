import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";
import t from "../../hooks/useT";
import useCoursesDialog from "./useCoursesDialog";

export default function CoachCardApplierApplyBtn() {

    const { user, applierForm } = useContext(Context)
    const { showCoursesDialog } = useCoursesDialog()
    const isAllFieldsFilled = applierForm && Object.values(applierForm).reduce((acc, curr) => !curr ? acc : acc + 1, 0) === 11 // CoachCardApplier validation: if not filled: currently 11 fields + email

    function showCourseList() {
        if (!isAllFieldsFilled) return
        showCoursesDialog()
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
