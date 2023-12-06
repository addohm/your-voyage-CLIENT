import React from 'react';
import "./index.scss"

export const BgText = ({ changePoint, move, className }) => {
    return (
        <>
            <div className={`wsn ${changePoint ? 'font3' : 'font4'} ${className}`} style={{ fontSize: 700, position: 'fixed', top: 0, right: move }}>
                BE {changePoint ? "YOU" : "NEW"}
            </div>
        </>
    );
};