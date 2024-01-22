import React, { useState } from 'react'
import { tools } from "./list.js"
import Tool from './Tool.js'
import ToolCardsHiddenTitles from './ToolCardsHiddenTitles.js'
import ToolCards from './ToolCards.js'
import goToCoach from '../../utils/goToCoach.js'
import t from '../../hooks/useT.js'
import ToolCardsArrowLabel from './ToolCardsArrowLabel.js'

export default function Tools() {

    const [toolCardsHidden, toolCardsHiddenSet] = useState(false)
    const [toolNameClicked, toolNameClickedSet] = useState("")

    function hideToolCardsShowExactCards(name) {
        if (name === "coach") { goToCoach(); return }
        toolCardsHiddenSet(prev => !prev)
        toolNameClickedSet(name)
    }

    return (
        // ! pt300 for centering, flex works bad
        <div className='mih100vh pt300 tools'>
            <ToolCardsHiddenTitles tools={tools} toolCardsHidden={toolCardsHidden} toolCardsHiddenSet={toolCardsHiddenSet} toolNameClicked={toolNameClicked} toolNameClickedSet={toolNameClickedSet} />
            <div className='fcc por'>
                <ToolCardsArrowLabel toolCardsHidden={toolCardsHidden} />
                <div className='fcc g30'>
                    {tools.map(({ img, name }, ind) => {
                        return (
                            <Tool key={ind} img={img} name={t(name)} ind={ind} onClick={() => hideToolCardsShowExactCards(name)} toolCardsHidden={toolCardsHidden} />
                        )
                    })}
                </div>
            </div>
            <ToolCards toolNameClicked={toolNameClicked} toolCardsHidden={toolCardsHidden} />
        </div>
    )
}
