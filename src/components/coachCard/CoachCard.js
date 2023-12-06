import { useEffect } from "react";
import CoachCardRadio from "./CoachCardRadio";
import CoachCardRatings from "./CoachCardRatings";

export default function CoachCard({ img, title, radio, rating, ind, className, children, isCoach }) {

    useEffect(() => {
        document.querySelector(".coach").querySelectorAll(".radio-container").forEach(each => {
            const defaultCoachValues = ["TRAVELING", "FULL-TIME", "ONSITE", "CONTRACT"]
            if (defaultCoachValues.includes(each.innerText)) {
                each.click()
            }
        })
    }, [])

    return (
        <div className={`maw445 bg_white brL ${className} p15`} >
            <div className='fcc'>
                <img src={img} />
                <div className="pl15 ttu">{title}</div>
            </div>
            <CoachCardRatings rating={rating} isReadOnly={isCoach} />
            {radio.map(options => (
                <CoachCardRadio options={options} />
            ))}
            {children}
        </div>
    )
}
