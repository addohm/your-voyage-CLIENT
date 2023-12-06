import React, { useState } from 'react';
import "./index.scss"
import arrow2 from "./img/arrow2.svg"

export default function CoachCardRadio({ options }) {

    const [selectedOption, selectedOptionSet] = useState(null)
    const [clickedOptionInd, clickedOptionIndSet] = useState(null)

    return (
        <div className='fcc fwn por'>
            {options.map((option, ind) => (
                <label
                    className={`radio-container hoverBrandColor ${selectedOption === option ? 'brand fw600' : ''} ${ind === 0 ? "tar" : "tal"}`}
                    onClick={() => clickedOptionIndSet(ind)}
                >
                    {option}
                    <input
                        type="radio"
                        name="customRadio"
                        value="option"
                        checked={selectedOption === option}
                        onChange={() => selectedOptionSet(option)}
                    />
                </label>
            ))}
            <img src={arrow2} className={`poa t-5 ${clickedOptionInd === 0 ? "tr180" : ""}`} />
        </div>
    );
};