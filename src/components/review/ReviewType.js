import Animation from '../animation/Animation';
import './index.scss'

export default function ReviewType({ type }) {
    return (
        <Animation
        // type="right"
        >
            <div className='brand reviewType'>{type}</div>
        </Animation>
    )
}
