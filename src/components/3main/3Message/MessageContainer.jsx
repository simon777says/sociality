import React from 'react';
import Message from './Message';
import { updateNewMessaeTextActionCreator, addMessageActionCreator } from '../../../redux/message-reducer'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        messagesP: state.messagesP,
        dialogsElement: state.messagesP.dialogs,
        messagesElement: state.messagesP.messages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessgeChange: (text) => {
            dispatch(updateNewMessaeTextActionCreator(text));
        },
    }
}

const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);

export default MessageContainer;



// const MessageContainer = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 debugger
//                 let state = store.getState();
//                 let dialogsElement = state.messagesP.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
//                 let messagesElement = state.messagesP.messages.map(m => <Messagess message={m.message} id={m.id} />);

//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }
//                 let onMessgeChange = (text) => {
//                     store.dispatch(updateNewMessaeTextActionCreator(text));
//                 }

//                 return <Message
//                     dialogsElement={dialogsElement}
//                     messagesElement={messagesElement}
//                     addMessage={addMessage}
//                     onMessgeChange={onMessgeChange}
//                     messagesP={store.getState().messagesP}
//                 />
//             }
//         }</StoreContext.Consumer >)
// }