import React, { useState } from 'react'
import { tools } from "./list.js"
import Tool from './Tool.js'
import LeftTitle from '../other/LeftTitle.js'
import Arrow from '../banner/Arrow.js'
import ToolCardsHiddenTitles from './ToolCardsHiddenTitles.js'
import ToolCards from './ToolCards.js'

export default function Tools() {

    const [toolCardsHidden, toolCardsHiddenSet] = useState(false)
    const [toolNameClicked, toolNameClickedSet] = useState("")

    function hideToolCardsShowExactCards(name) {
        // go to coach: don't refactor
        if (name === "coach") { document.querySelector(".coach").scrollIntoView({ behavior: "smooth" }); return }
        toolCardsHiddenSet(prev => !prev)
        toolNameClickedSet(name)
    }

    return (
        // ! pt300 for centering, flex works bad
        <div className='h100vh pt300 tools'>
            <ToolCardsHiddenTitles tools={tools} toolCardsHidden={toolCardsHidden} toolCardsHiddenSet={toolCardsHiddenSet} toolNameClicked={toolNameClicked} toolNameClickedSet={toolNameClickedSet} />
            <div className='fcc por'>
                <div className="poa l-50 t150">
                    <LeftTitle text="your success tools" isVisible={!toolCardsHidden} />
                    <Arrow className="mx30 banner__arrow poa l110 t-35 w30 tr180" />
                </div>
                <div className='fcc g30'>
                    {tools.map(({ img, name }, ind) => {
                        return (
                            <Tool key={ind} img={img} name={name} ind={ind} onClick={() => hideToolCardsShowExactCards(name)} toolCardsHidden={toolCardsHidden} />
                        )
                    })}
                </div>
            </div>
            <ToolCards toolNameClicked={toolNameClicked} toolCardsHidden={toolCardsHidden} />
        </div>
    )
}
