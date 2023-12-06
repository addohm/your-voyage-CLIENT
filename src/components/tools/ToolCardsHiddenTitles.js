import ToolCardTitle from "./ToolCardTitle"

export default function ToolCardsHiddenTitles({ tools, toolCardsHidden, toolCardsHiddenSet, toolNameClicked, toolNameClickedSet }) {
    // todo 5
    return (
        toolCardsHidden &&
        <div className='f fwn g30 jcsb w1655 m0a'>
            {tools.map(({ name }, ind) => {
                return (
                    <>
                        <div className='fcc w100p' onClick={() => toolNameClickedSet(name)}>
                            <ToolCardTitle name={name} animationType="bottom" toolNameClicked={toolNameClicked} toolCardsHiddenSet={toolCardsHiddenSet} />
                        </div>
                    </>
                )
            })}
        </div>
    )
}
