import CoachCardRadio from "./CoachCardRadio";
import CoachCardRatings from "./CoachCardRatings";
import useCoachCard from "./useCoachCard";
import useDefaultCoachValues from "./useDefaultCoachValues";

export default function CoachCard({ img, title, radio, rating, ind, className, children, isCoach }) {

    useDefaultCoachValues()
    const { memoCoachCard } = useCoachCard()

    return (
        <form className={`maw445 bg_white brL ${className} p15`} onChange={memoCoachCard} >
            <div className='fcc'>
                <img src={img} />
                <div className="pl15 ttu">{title}</div>
            </div>
            <CoachCardRatings rating={rating} isReadOnly={isCoach} />
            {radio.map((options, outerInd) => (
                <CoachCardRadio options={options} outerInd={outerInd} />
            ))}
            {children}
        </form>
    )
}
