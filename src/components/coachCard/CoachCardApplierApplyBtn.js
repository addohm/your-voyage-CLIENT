import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context";
import CoachCardApplierCourseList from "./CoachCardApplierCourseList";

export default function CoachCardApplierApplyBtn() {

    const { dialogSet, user } = useContext(Context)

    return (
        <Button
            type="submit"
            variant="contained"
            disabled={!user}
            onClick={() => dialogSet({
                show: true,
                title: "Please choose your coach",
                children: <CoachCardApplierCourseList />
            })}
        >
            APPLY
        </Button>
    )
}
