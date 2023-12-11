import Animation from '../animation/Animation'
import { Button } from '@mui/material'

export default function ToolCardBtn({ isCardHovered }) {
    return (
        isCardHovered &&
        <Animation type="left">
            <Button className="poa b10 l140" variant="outlined">READ MORE</Button>
        </Animation>
    )
}
