import useCoachCard from "./useCoachCard"
import useCoachCardApplierCoachList from "./useCoachCardApplierCoachList"

export default function CoachCardApplierCoachList() {

    const { coachList } = useCoachCardApplierCoachList()
    const { goToStripe } = useCoachCard()

    function chooseCoach(email) {
        let newCoachCard = JSON.parse(localStorage.getItem("coachCard"))
        newCoachCard.coachEmail = email
        localStorage.setItem("coachCard", JSON.stringify(newCoachCard))
        goToStripe()
    }

    return (
        <>
            {coachList?.map((coach, ind) => {
                return (
                    <div className="mih150" onClick={() => chooseCoach(coach.email)}>
                        <div className="por fc m15 w100">
                            <img className="br50 w100 h100" src={coach.img} />
                            <div key={ind} className="poa b-40 tac fcc w100p">{coach.name}</div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
