import useCoachCard from "./useCoachCard"
import usePosts from "../post/usePosts"

export default function CoachCardApplierCourseList() {

    const { goToStripe } = useCoachCard()
    const [courses] = usePosts("courses")

    function chooseCoach(coachEmail, courseName) {
        let newCoachCard = JSON.parse(localStorage.getItem("coachCard"))
        newCoachCard.coachEmail = coachEmail
        newCoachCard.courseName = courseName
        localStorage.setItem("coachCard", JSON.stringify(newCoachCard))
        goToStripe()
    }

    return (
        <>
            {courses?.map(({ coachEmail, img, courseName, price }, ind) => {
                return (
                    <div className="mih150" onClick={() => chooseCoach(coachEmail, courseName)}>
                        <div className="por fc m15 w100">
                            <img className="br50 w100 h100" src={img} />
                            <div className="poa b-40 tac fcc w100p">{courseName}</div>
                            <div className="poa b-60 tac fcc w100p">${price}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
