import Animation from '../animation/Animation'
import TextSplit from '../animation/TextSplit'

export default function LeftTitle({ text, className, isVisible = true }) {
    return (
        isVisible &&
        <Animation type="bottomRotate">
            <div className={`banner__imgLeftTitle ${className}`}><TextSplit str={text} /></div>
        </Animation>
    )
}
