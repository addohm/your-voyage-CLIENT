import Animation from '../animation/Animation';

export default function ReviewType({ type }) {
    return (
        <Animation type="right">
            <div className='poa r-40 t4 brand ttu ls3'>{type}</div>
        </Animation>
    )
}
