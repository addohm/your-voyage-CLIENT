import goToCoach from "../../utils/goToCoach"
import ToolCardTitle from "./ToolCardTitle"
import t from "../../hooks/useT"

export default function ToolCardsHiddenTitles({ tools, toolCardsHidden, toolCardsHiddenSet, toolNameClicked, toolNameClickedSet }) {

    function onClick(name) {
        if (name === "coach") { goToCoach(); return }
        toolNameClickedSet(name)
    }

    return (
        toolCardsHidden &&
        <div className='f fwn g30 jcsb m0a toolCardsHiddenTitles'>
            {tools.map(({ name }, ind) => {
                return (
                    <>
                        <div className='fcc w100p' onClick={() => onClick(name)}>
                            <ToolCardTitle name={name} translatedName={t(name)} animationType="bottom" toolNameClicked={toolNameClicked} toolCardsHiddenSet={toolCardsHiddenSet} />
                        </div>
                    </>
                )
            })}
        </div>
    )
}
