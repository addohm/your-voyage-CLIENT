import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";
import t from "../../hooks/useT";
import useCoursesDialog from "./useCoursesDialog";
import useIsApplierFormFilled from "./useIsApplierFormFilled";

export default function CoachCardApplierApplyBtn() {

    const { user } = useContext(Context)
    const { showCoursesDialog } = useCoursesDialog()
    const { isApplierFormFilled } = useIsApplierFormFilled()

    function showCourseList() {
        if (!isApplierFormFilled) return
        showCoursesDialog()
    }

    return (
        <Button
            type="submit"
            variant="contained"
            disabled={!user || !isApplierFormFilled}
            onClick={showCourseList}
        >
            {t("apply")}
        </Button>
    )
}
