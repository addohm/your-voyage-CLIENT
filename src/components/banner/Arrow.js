import Animation from '../animation/Animation'
import arrow from "./img/arrow.svg"

export default function Arrow({ className, onClick }) {
    return (
        <Animation type="rotateY">
            <img src={arrow} className={`${className}`} onClick={onClick} />
        </Animation>
    )
}
