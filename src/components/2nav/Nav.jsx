import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.scss';

const Nav = (props) => {
    return (
        <div className={s.sideBar}>
            <ul className={s.sideBarMenu}>
                <li ><NavLink to="/MyPage" activeClassName={s.activel}>My page</NavLink></li>
                <li ><NavLink to="/News" activeClassName={s.activel}>News</NavLink></li>
                <li ><NavLink to="/Message" activeClassName={s.activel}>Messages</NavLink></li>
                <li ><NavLink to="/Friends" activeClassName={s.activel}>Friends</NavLink></li>
                <li ><NavLink to="/Music" activeClassName={s.activel}>Music</NavLink></li>
                <li ><NavLink to="/Settings" activeClassName={s.activel}>Settings</NavLink></li>
            </ul>

        </div>
    )
}
export default Nav;