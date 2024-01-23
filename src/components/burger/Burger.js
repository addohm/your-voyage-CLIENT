import React from 'react';
import "./index.scss";

export default function Burger({ isVisible, isVisibleMobileNavSet, isVisibleMobileNav }) {
    return (
        isVisible &&
        <div className="hamburger por zi3" >
            <input
                className="label-check"
                id="label-check"
                type="checkbox"
                onClick={() => isVisibleMobileNavSet(prev => !prev)}
                checked={isVisibleMobileNav}
            />
            <label htmlFor="label-check" className="hamburger-label">
                <div className="line1 bg_black"></div>
                <div className="line2 bg_black"></div>
                <div className="line3 bg_black"></div>
            </label>
        </div>
    );
};