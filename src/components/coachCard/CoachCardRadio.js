import React, { useContext, useState } from 'react';
import "./index.scss"
import arrow2 from "./img/arrow2.svg"
import arrow2White from "./img/arrow2White.svg"
import InputRequiredNativeTooltip from '../form/InputRequiredNativeTooltip';
import Input from '../form/Input';
import t from "../../hooks/useT";
import { Context } from '../../Context';

export default function CoachCardRadio({ options, outerInd, isReadOnly }) {

    const [selectedOption, selectedOptionSet] = useState(null)
    const [clickedOptionInd, clickedOptionIndSet] = useState(null)

    const { theme, applierFormSet, applierForm } = useContext(Context)
    const arrowSrc = theme === "light" ? arrow2 : arrow2White

    function onChange(option) {
        if (isReadOnly) return
        selectedOptionSet(option)
        applierFormSet(prev => ({ ...prev, ["radio" + outerInd]: option }))
    }

    return (
        <div className='fcc fwn por'>
            {options.map((option, ind) => {

                let memoRadioValue
                if (applierForm) {
                    memoRadioValue = Object.values(applierForm).find((keyValue, ind) => keyValue === option)
                }
                const isRadioChecked = isReadOnly ? selectedOption === option : memoRadioValue === option

                return (
                    <label
                        className={`por radio-container hoverBrandColor ${isRadioChecked ? 'brand fw600' : ''} ${ind === 0 ? "tar" : "tal"}`}
                        onClick={() => clickedOptionIndSet(ind)}
                    >
                        {t(option)}
                        <Input
                            type="radio"
                            name={"radio" + outerInd}
                            value={selectedOption}
                            checked={isRadioChecked}
                            onChange={() => onChange(option)}
                        />
                        {/* NOT WORKING as expected */}
                        {/* <InputRequiredNativeTooltip required={!selectedOption} className="r0 b0" /> */}
                    </label>
                )
            })}
            <img src={arrowSrc} className={`poa t-5 ${clickedOptionInd === 0 ? "tr180" : ""}`} />
        </div>
    );
};