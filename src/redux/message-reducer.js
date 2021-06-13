

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};
const messageReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMessageText = {
            id: 5,
            message: state.newMessage,
        }
        state.messages.push(newMessageText);
        state.newMessage = '';

    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessage = action.newText;

    }
    return state;
}
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' })
export const updateNewMessaeTextActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text })

export default messageReducer;