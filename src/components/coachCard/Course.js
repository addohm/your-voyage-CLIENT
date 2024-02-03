import { Link } from "react-router-dom";
import useCoachCard from "./useCoachCard"
import { useContext, useState } from "react";
import CourseLabel from "./CourseLabel";
import { Context } from "../../Context";
import CourseDesc from "./CourseDesc";
import CourseBuyBtn from "./CourseBuyBtn";
import genFirstCharColor from "../../utils/genFirstCharColor";
import CourseImg from "./CourseImg";

export default function Course(props) {

    // ! DON'T DELETE PROPS
    let { coachName, img, img2, courseName, courseDesc, isLongDesc, price, discountPrice, courseLabel, courseLabelColor, _id: courseId, className } = props

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

    // if no label provided, use "NEW"
    !courseLabel && (courseLabel = "NEW")
    // if no color provided, use genFirstCharColor
    courseLabelColor = (courseLabelColor && courseLabelColor !== "#000000") ? courseLabelColor : genFirstCharColor(courseLabel)

    return (
        <Link to={stripeLink}>
            <div className={`por course bg_white zi3 ${className || ""}`} onClick={chooseCourse} onMouseEnter={() => isHoveredSet(true)} onMouseLeave={() => isHoveredSet(false)}>
                <CourseLabel isCourseHovered={isHovered} courseLabel={courseLabel} courseLabelColor={courseLabelColor} isHovered={isHovered} />
                <div className="fcc m15">
                    <CourseImg img={img} img2={img2} />
                    <div className="mt10 w100p">
                        <div className="tac fcc ttu fw500 fz20">{coachName}</div>
                        <div className="tac fcc ttu fw500 gray mb5">{courseName}</div>
                        <CourseDesc {...props} />
                        <div className="fcc mt30 poa b15 cx">
                            {!isHovered && <div className={`tac fcc fw500 fz20 cardAnim ${discountPrice ? "tdlt mr5 gray fz22" : "brand"}`}>${price}</div>}
                            {(!isHovered && discountPrice) && <div className="tac fcc brandi fw500 fz20 cardAnim">${discountPrice}</div>}
                            <CourseBuyBtn isCourseHovered={isHovered} courseLabelColor={courseLabelColor} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
