import Animation from '../animation/Animation'
import ToolCardIconDelete from './ToolCardIconDelete';
import ToolCardIconEdit from './ToolCardIconEdit';
import For from '../other/For'

export default function ToolCardIcons({ isVisible = true, type, _id, className }) {
    return (
        isVisible &&
        <For role="admin">
            <Animation type="opacity">
                <div className={className}>
                    <ToolCardIconEdit type={type} _id={_id} />
                    <ToolCardIconDelete type={type} _id={_id} isVisible={!["terms", "privacy"].includes(type)} />
                </div>
            </Animation>
        </For>
    )
}
