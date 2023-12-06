import Animation from "../animation/Animation"

export default function ReviewImg({ img }) {
    return (
        <div className='fcc w100p por b50'>
            <img src={img} className="scaleImgWidth" />
        </div>
    )
}
