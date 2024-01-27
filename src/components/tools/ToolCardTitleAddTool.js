import { Add as AddTool } from '@mui/icons-material';
import { Link } from "react-router-dom";
import Animation from '../animation/Animation';
import For from '../other/For';

export default function ToolCardTitleAddTool({ thisTitleClicked, iconSize, name }) {
    return (
        thisTitleClicked &&
        <For role="admin">
            <Animation
                type="scale"
            >
                <Link to={`/add/${name}`}>
                    <AddTool
                        style={{ height: iconSize, width: iconSize }}
                        className='poa t0'
                    />
                </Link>
            </Animation>
        </For>
    )
}
