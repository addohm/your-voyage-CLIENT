import CoachCardRadio from "./CoachCardRadio";
import CoachCardRatings from "./CoachCardRatings";
import useCoachCard from "./useCoachCard";
import useDefaultCoachValues from "./useDefaultCoachValues";
import t from "../../hooks/useT";

export default function CoachCard({ img, title, name, radio, rating, ind, className, children, isCoach }) {

    useDefaultCoachValues()
    const { memoCoachCard } = useCoachCard()

    return (
        <form className={`maw445 bg_white zi2 brL ${className} p15`} onChange={memoCoachCard} onSubmit={(e) => e.preventDefault()} >
            <div className="pl15 ttu tac fw500 mt15 mb25 ls2">~ {t(title)} ~</div>
            <div className='fc aic'>
                <img src={img} className="w80 h80" />
                <div className="fz14">{t(name)}</div>
            </div>
            <CoachCardRatings rating={rating} isReadOnly={isCoach} />
            {radio.map((options, outerInd) => (
                <CoachCardRadio options={options} outerInd={outerInd} isReadOnly={isCoach} />
            ))}
            {children}
        </form>
    )
}
