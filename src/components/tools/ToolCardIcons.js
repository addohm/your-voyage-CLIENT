import Animation from '../animation/Animation'
import ToolCardIconDelete from './ToolCardIconDelete';
import ToolCardIconEdit from './ToolCardIconEdit';

export default function ToolCardIcons({ isVisible = true, type, _id, className }) {
    return (
        isVisible &&
        <Animation type="opacity">
            <div className={className}>
                <ToolCardIconEdit type={type} _id={_id} />
                <ToolCardIconDelete type={type} _id={_id} isVisible={!["terms", "privacy"].includes(type)} />
            </div>
        </Animation>
    )
}
