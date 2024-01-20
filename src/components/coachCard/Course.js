import { Link } from "react-router-dom";
import useCoachCard from "./useCoachCard"
import { Button } from "@mui/material";
import { useState } from "react";

export default function Course({ coachEmail, coachName, img, courseName, price, discountPrice }) {

    const { stripeLink } = useCoachCard(courseName)
    const [isHovered, isHoveredSet] = useState(false)

    function chooseCoach(coachEmail, courseName) {
        let newCoachCard = JSON.parse(localStorage.getItem("coachCard"))
        newCoachCard.coachEmail = coachEmail
        newCoachCard.courseName = courseName
        localStorage.setItem("coachCard", JSON.stringify(newCoachCard))
    }

    return (
        <Link to={stripeLink}>
            <div className="por course" onClick={() => chooseCoach(coachEmail, courseName)} onMouseEnter={() => isHoveredSet(true)} onMouseLeave={() => isHoveredSet(false)}>
                <div className="fcc m15">
                    <img className="br50 w100 h100" src={img} />
                    <div className="mt10 w100p">
                        <div className="tac fcc ttu fw500 fz20">{coachName}</div>
                        <div className="tac fcc gray">{courseName}</div>
                        <div className="fcc mt30 poa b15 cax">
                            {!isHovered && <div className={`tac fcc fw500 fz20 cardAnim ${discountPrice ? "tdlt mr5 gray fz22" : "brand"}`}>${price}</div>}
                            {(!isHovered && discountPrice) && <div className="tac fcc brand fw500 fz20 cardAnim">${discountPrice}</div>}
                            {isHovered && <Button className="h36 fcc w100p cardAnim" variant="contained">BUY</Button>}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
