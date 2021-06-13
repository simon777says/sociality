import React from 'react';
import s from './Messagess.module.scss';

const Messagess = (props) => {
    return (
        <div className={s.messagi}>
            <div>{props.message}</div>
        </div>
    )
}
export default Messagess;