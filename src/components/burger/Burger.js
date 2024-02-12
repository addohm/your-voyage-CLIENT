import React, { useContext } from 'react';
import "./index.scss";
import { Context } from '../../Context';
import UserImgWithNotReadNumWithLinkToRooms from '../other/UserImgWithNotReadNumWithLinkToRooms';

export default function Burger({ isVisible, isVisibleMobileNavSet, isVisibleMobileNav }) {

    const { user, totalNotReadNum, totalNotReadNumSupport } = useContext(Context)

    return (
        isVisible &&
        <div className='fcc'>
            {
                ((totalNotReadNum > 0 || totalNotReadNumSupport > 0) && !isVisibleMobileNav) &&
                <UserImgWithNotReadNumWithLinkToRooms
                    // mobile (outside-menu, near-burger) notReadNum indicator
                    name={user?.name}
                    img={user?.img}
                    imgClassName="w40 h40"
                    notReadNum={totalNotReadNum}
                    numClassName="w20 h20 l-4 t-2 fz13 zi2"
                    notReadNumSupport={totalNotReadNumSupport}
                    numSupportClassName="w20 h20 l24 t-2 fz13 zi2"
                />
            }
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
        </div>
    );
};