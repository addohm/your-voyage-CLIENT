import Animation from '../animation/Animation'
import arrow from "./img/arrow.svg"
import arrowWhite from "./img/arrowWhite.svg"
import { useContext } from 'react'
import { Context } from '../../Context'

export default function Arrow({ className, onClick, isVisible = true }) {

    const { theme } = useContext(Context)
    const arrowSrc = theme === "light" ? arrow : arrowWhite

    return (
        isVisible &&
        <Animation
            type="rotateY"
        >
            <img src={arrowSrc} className={`${className}`} onClick={onClick} />
        </Animation>
    )
}
