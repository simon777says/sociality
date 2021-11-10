import React from 'react';
import log from '../../img/logo.gif'
import s from './Header.module.scss';
function Header(props) {
    return (
        <header className={s.header}>
            <img src={log} alt="sory"></img>
            <input type="text" />
            <button className={s.but}><a href="#">Found</a></button>
            <button className={s.but1}><a href="#">Sign Out</a></button>
        </header>
    );
}
export default Header;