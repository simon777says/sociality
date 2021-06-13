import React from 'react';
import s from './Activity.module.scss';
import like from '../../../../../img/like.png';
import dislike from '../../../../../img/dislike-r.png';

const Activity = (props) => {
    return (
        <div className={s.activiti}>
            <div className={s.like}> <img className={s.likeAd} src={like} alt="" /> <a href="#">Add Fire</a>
            </div>

            <div className={s.dislike}> <img className={s.dislikeAd} src={dislike} alt="" /> <a href="#">Take Fire</a>
            </div>
        </div>
    )
}
export default Activity;