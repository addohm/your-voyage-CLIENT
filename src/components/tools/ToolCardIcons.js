import Animation from '../animation/Animation'
import ToolCardIconDelete from './ToolCardIconDelete';
import ToolCardIconEdit from './ToolCardIconEdit';

export default function ToolCardIcons({ isCardHovered, type, _id }) {
    return (
        isCardHovered &&
        <Animation type="opacity">
            <div className='poa r4 b4'>
                <ToolCardIconEdit type={type} _id={_id} />
                <ToolCardIconDelete type={type} _id={_id} />
            </div>
        </Animation>
    )
}
