import { Link } from "react-router-dom";
import useCoachCard from "./useCoachCard"
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import CourseLabel from "./CourseLabel";
import { Context } from "../../Context";

export default function Course({ coachEmail, coachName, img, courseName, price, discountPrice, courseLabel, courseLabelColor, _id: courseId }) {

    const { stripeLink } = useCoachCard(courseId)
    const [isHovered, isHoveredSet] = useState(false)
    const { applierForm } = useContext(Context)

    function chooseCourse() {
        let newCoachCard = applierForm
        newCoachCard.courseId = courseId
        newCoachCard.courseName = courseName
        // for VerifyOrderToken (comes there after Stripe payment) to create coaching (DB) using axios "/applyForCoaching": only localStorage will work, cause VerifyOrderToken page loads after Stripe payment page (full reload)
        localStorage.setItem("coachCard", JSON.stringify(newCoachCard))
    }

    return (
        <Link to={stripeLink}>
            <div className="por course bg_white zi3" onClick={chooseCourse} onMouseEnter={() => isHoveredSet(true)} onMouseLeave={() => isHoveredSet(false)}>
                <CourseLabel courseLabel={courseLabel} courseLabelColor={courseLabelColor} isHovered={isHovered} />
                <div className="fcc m15">
                    <img className="br50 w100 h100" src={img} />
                    <div className="mt10 w100p">
                        <div className="tac fcc ttu fw500 fz20">{coachName}</div>
                        <div className="tac fcc gray">{courseName}</div>
                        <div className="fcc mt30 poa b15 cx">
                            {!isHovered && <div className={`tac fcc fw500 fz20 cardAnim ${discountPrice ? "tdlt mr5 gray fz22" : "brand"}`}>${price}</div>}
                            {(!isHovered && discountPrice) && <div className="tac fcc brandi fw500 fz20 cardAnim">${discountPrice}</div>}
                            {isHovered && <Button className="h36 fcc w100p cardAnim" variant="contained">BUY</Button>}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
