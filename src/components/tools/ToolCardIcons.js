import Animation from '../animation/Animation'
import { Clear } from '@mui/icons-material';
import ToolCardIconEdit from './ToolCardIconEdit';

export default function ToolCardIcons({ isCardHovered, type, _id }) {
    return (
        isCardHovered &&
        <Animation type="opacity">
            <div className='poa r4 b4'>
                <ToolCardIconEdit type={type} _id={_id} />
                <Clear style={{ height: 30, width: 30 }} />
            </div>
        </Animation>
    )
}
