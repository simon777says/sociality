import React from 'react';
import s from './MyPosts.module.scss';
import ava from '../../../../img/plague_doctor-ikon.webp'
import Activity from '../../7Posts/Activity/Activity';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/myPage-reducer'

const MyPosts = (props) => {
    console.log('MyPostsProps', props);

    let newPostsElement = React.createRef();

    let onPostChange = () => {
        let text = newPostsElement.current.value;
        props.onPostChange(text)
    }
    return (
        <div>
            <div className={s.inputi}>
                <textarea
                    rows="1"
                    onChange={onPostChange}
                    className={s.input}
                    ref={newPostsElement}
                    value={props.myPageInput} />

                <button className={s.inputButton} onClick={props.addPost} >Add post </button>
            </div>
            <div className={s.revers}>
                {props.posts}
            </div>
        </div>
    )
}

export default MyPosts;

