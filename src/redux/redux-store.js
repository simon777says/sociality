import { combineReducers, createStore } from "redux";
import messageReducer from "./message-reducer";
import musicReducer from './music-reducer';
import myPageReducer from "./myPage-reducer";
import newsReducer from './news-reducer';
import friendsReducer from './friends-reducer';
import setingsReducer from './setings-reducer';


let redusers = combineReducers({
    myPageP: myPageReducer,
    newsP: newsReducer,
    messagesP: messageReducer,
    friendsP: friendsReducer,
    musicP: musicReducer,
    settingsP: setingsReducer,
});
let store = createStore(redusers);
export default store;