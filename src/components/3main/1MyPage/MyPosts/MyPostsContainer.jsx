import React from 'react';
import s from './MyPosts.module.scss';
import ava from '../../../../img/plague_doctor-ikon.webp'
import Activity from '../../7Posts/Activity/Activity';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/myPage-reducer'
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {

    let posts = props.myPageP.myposts.map(m =>
        <div className={s.myPosts} >
            <div className={s.posts}>
                <div className={s.he}>
                    <img className={s.ava} src={ava} />
                    <p className={s.tit}>Luca Vitali </p>
                    <div className={s.bodyPost}>
                        {m.myposts}
                    </div>
                </div>
                <Activity />
            </div>
        </div>);


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <MyPosts
            posts={posts}
            addPost={addPost}
            myPageInput={props.myPageP.myPageInput}
            onPostChange={onPostChange}
        />
    )
}

export default MyPostsContainer;

