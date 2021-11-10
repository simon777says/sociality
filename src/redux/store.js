import messageReducer from './message-reducer'
import myPageReducer from './myPage-reducer'
import friendsReducer from './friends-reducer';
import newsReducer from './news-reducer';
import setingsReducer from './setings-reducer';
import musicReducer from './music-reducer';

let store = {
    _state: {
        myPageP: {
            myposts: [
                { id: 1, myposts: 'Im tired' },
                { id: 2, myposts: 'Im tired' },
                { id: 3, myposts: ' tired' },
                { id: 4, myposts: ' tired' },
                { id: 5, myposts: 'Im slep' },
            ],
            myPageInput: '',
        },
        newsP: {},
        messagesP: {
            dialogs: [
                { id: 1, name: 'Vitalyi' },
                { id: 2, name: 'Denchik' },
                { id: 3, name: 'Vitya' },
                { id: 4, name: 'Vova' },
            ],
            messages: [
                { id: 1, message: 'hello' },
                { id: 2, message: 'Go lol' },
                { id: 3, message: 'I sleep' },
                { id: 4, message: 'Fuck you' },
            ],
            newMessage: '',
        },
        musicP: {},
        settingsP: {},
    },
    _calSubscriber() {
        console.log('State chenged')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._calSubscriber = observer;
    },

    dispatch(action) {
        this._state.myPageP = myPageReducer(this._state.myPageP, action);
        this._state.newsP = newsReducer(this._state.newsP, action);
        this._state.musicP = musicReducer(this._state.musicP, action);
        this._state.friendsP = friendsReducer(this._state.friendsP, action);
        this._state.messagesP = messageReducer(this._state.messagesP, action);
        this._state.settingsP = setingsReducer(this._state.settingsP, action);

        this._calSubscriber(this._state);
    },
}



export default store;

window.state = store;