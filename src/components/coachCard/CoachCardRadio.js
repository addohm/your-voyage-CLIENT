import React, { useState } from 'react';
import "./index.scss"
import arrow2 from "./img/arrow2.svg"
import InputRequiredNativeTooltip from '../form/InputRequiredNativeTooltip';
import Input from '../form/Input';

export default function CoachCardRadio({ options, outerInd }) {

    const [selectedOption, selectedOptionSet] = useState(null)
    const [clickedOptionInd, clickedOptionIndSet] = useState(null)

    return (
        <div className='fcc fwn por'>
            {options.map((option, ind) => (
                <label
                    className={`por radio-container hoverBrandColor ${selectedOption === option ? 'brand fw600' : ''} ${ind === 0 ? "tar" : "tal"}`}
                    onClick={() => clickedOptionIndSet(ind)}
                >
                    {option}
                    <Input
                        type="radio"
                        name={"radio" + outerInd}
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => selectedOptionSet(option)}
                    />
                    <InputRequiredNativeTooltip required={!selectedOption} className="r0 b0" />
                </label>
            ))}
            <img src={arrow2} className={`poa t-5 ${clickedOptionInd === 0 ? "tr180" : ""}`} />
        </div>
    );
};