import React from 'react';
import s from './Messagess.module.scss';

const Messagess = (store) => {
    return (
        <div className={s.messagi}>
            <div>{store.message}</div>
        </div>
    )
}
export default Messagess;

// fetchMyTweets        
