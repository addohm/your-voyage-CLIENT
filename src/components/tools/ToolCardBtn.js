import Animation from '../animation/Animation'
import { Button } from '@mui/material'
import t from '../../hooks/useT'

export default function ToolCardBtn({ isCardHovered }) {
    return (
        isCardHovered &&
        <Animation type="left">
            <Button className="poa b10 l140" variant="outlined">{t("read more")}</Button>
        </Animation>
    )
}
