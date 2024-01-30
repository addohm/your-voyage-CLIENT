import React, { useEffect, useState } from "react";
import "./index.scss"

export default function Toggle({ off, offValue, on, onValue, name, stateSetter, defaultValue, onToggle }) {

    const [isChecked, isCheckedSet] = useState(false)

    useEffect(() => {
        isCheckedSet(defaultValue === offValue)
    }, [])

    function toggle() {
        isCheckedSet(prev => !prev)
        stateSetter?.(isChecked ? onValue : offValue)
        localStorage.setItem(name, isChecked ? onValue : offValue)
        onToggle?.()
    }

    return (
        <div className="fcc my">
            <label className="label">
                <div className="toggle" onClick={toggle}>
                    <input
                        className="toggle-state"
                        type="checkbox"
                        checked={isChecked}
                    />
                    <div className="indicator por">
                        {isChecked
                            ?
                            off
                            :
                            on
                        }
                    </div>
                </div>
            </label>
        </div>
    );
};