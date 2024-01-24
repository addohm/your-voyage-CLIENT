import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";
import CoachCardApplierCourseList from "./CoachCardApplierCourseList";

export default function CoachCardApplierApplyBtn() {

    const { dialogSet, user } = useContext(Context)

    function showCourseList() {
        dialogSet({
            show: true,
            title: <div className="title">Choose your course</div>,
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
            APPLY
        </Button>
    )
}
