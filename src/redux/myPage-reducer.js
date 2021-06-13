const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    myposts: [
        { id: 1, myposts: 'Im tired' },
        { id: 2, myposts: 'Im tired' },
        { id: 3, myposts: ' tired' },
        { id: 4, myposts: ' tired' },
        { id: 5, myposts: 'Im slep' },
    ],
    myPageInput: '',
};

const myPageReducer = (state = initialState, action) => {


    if (action.type === ADD_POST) {
        let newPost = {
            id: 6,
            myposts: state.myPageInput,
        }
        state.myposts.push(newPost);
        state.myPageInput = '';

    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.myPageInput = action.textPost;
    }
    return state;
}
export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', textPost: text })

export default myPageReducer;