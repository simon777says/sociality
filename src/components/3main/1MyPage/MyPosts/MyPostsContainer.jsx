import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../../redux/myPage-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        myPageInput: state.myPageP.myPageInput,
        posts: state.myPageP.myposts,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        }, onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;

// {
//     let post = state.myPageP.myposts.map(m =>
//         <div className={s.myPosts} >
//             <div className={s.posts}>
//                 <div className={s.he}>
//                     <img className={s.ava} src={ava} />
//                     <p className={s.tit}>Luca Vitali </p>
//                     <div className={s.bodyPost}>
//                         {m.myposts}
//                     </div>
//                 </div>
//                 <Activity />
//             </div>
//         </div>);

// }


// {
//     const MyPostsContainer = () => {
//         return (
//             <StoreContext.Consumer>{
//                 (store) => {
//                     let state = store.getState();
//                     let post = state.myPageP.myposts.map(m =>
//                         <div className={s.myPosts} >
//                             <div className={s.posts}>
//                                 <div className={s.he}>
//                                     <img className={s.ava} src={ava} />
//                                     <p className={s.tit}>Luca Vitali </p>
//                                     <div className={s.bodyPost}>
//                                         {m.myposts}
//                                     </div>
//                                 </div>
//                                 <Activity />
//                             </div>
//                         </div>);


//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }

//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text));
//                     }


//                     return <MyPosts
//                         post={post}
//                         posts={state.myPageP.myposts}
//                         addPost={addPost}
//                         myPageInput={state.myPageP.myPageInput}
//                         onPostChange={onPostChange}
//                         myPageP={store.getState().myPageP}
//                     />
//                 }
//             }</StoreContext.Consumer>
//         )
//     }
// }
