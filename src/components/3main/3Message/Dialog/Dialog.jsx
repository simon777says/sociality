import React from 'react';
import s from './Dialog.module.scss';
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    return (<div className={s.dialogs + ' ' + s.active}>
        <NavLink to={"/Message/Dialog/" + props.id}>{props.name}</NavLink>
    </div>

    )
}
export default Dialog;