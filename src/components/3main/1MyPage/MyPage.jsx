import React from 'react';
import s from './MyPage.module.scss';
import avi from '../../../img/plague_doctor.png'
import MyPostsContainer from './MyPosts/MyPostsContainer';

const MyPage = (props) => {


    return (
        <div className={s.myPage}>
            <h1>Luca Vitali</h1>
            <img className={s.avi} src={avi} alt="" />
            <MyPostsContainer
                myPageP={props.myPageP}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default MyPage;

