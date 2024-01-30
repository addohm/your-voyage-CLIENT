import React, { useContext } from 'react';
import "./index.scss";
import UserImgWithNotReadNum from '../other/UserImgWithNotReadNum';
import { Context } from '../../Context';
import { MESSAGES_ROUTE } from '../../utils/consts';
import Link2 from '../other/Link2';

export default function Burger({ isVisible, isVisibleMobileNavSet, isVisibleMobileNav }) {

    const { user, totalNotReadNum } = useContext(Context)

    return (
        isVisible &&
        <div className='fcc'>
            {
                (totalNotReadNum > 0 || totalNotReadNum?.length > 0) &&
                <Link2 to={MESSAGES_ROUTE}>
                    <UserImgWithNotReadNum img={user?.img} notReadNum={totalNotReadNum} imgClassName="w40 h40" numClassName="w20 h20 l-4 t-2 fz13" />
                </Link2>
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