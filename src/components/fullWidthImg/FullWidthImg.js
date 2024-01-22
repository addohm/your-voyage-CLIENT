import Animation from '../animation/Animation'
import './index.scss'

export default function FullWidthImg({ img }) {

    return (
        <Animation
            type="opacity"
        >
            <div className='h100vh por zi2 hoverScale transition15'>
                <img
                    src={img}
                    className="ofCover poa ca fullWidthImg"
                />
            </div>
        </Animation>
    )
}
