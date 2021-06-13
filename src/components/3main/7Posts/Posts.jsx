import React from 'react';
import s from './Posts.module.scss';
import ava from '../../../img/ava.jpg';
import post from '../../../img/post.png';

import Activity from './Activity/Activity';

const Posts = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.he}>
                <img className={s.ava} src={ava} alt="" />
                <p className={s.tit}> {props.message} </p>
            </div>
            <img className={s.postImg} src={post} alt="" />
            <Activity />
        </div>
    )
}
export default Posts;