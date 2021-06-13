import React from 'react';
import s from './Message.module.scss';
import Dialog from './Dialog/Dialog';
import Messagess from './Messagess/Messagess';
import { updateNewMessaeTextActionCreator, addMessageActionCreator } from '../../../redux/message-reducer'

const Message = (props) => {

    let dialogsElement = props.messagesP.dialogs.map(d => <Dialog name={d.name} id={d.id} />);
    let messagesElement = props.messagesP.messages.map(m => <Messagess message={m.message} id={m.id} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessgeChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessaeTextActionCreator(text));
    }
    return (<div>
        <div className={s.Messages}>
            <div className={s.dialogs}>
                <div className={s.dialog_item}>
                    {dialogsElement}
                </div>
            </div>
            <div className={s.message}>
                {messagesElement}
            </div>
        </div>
        <div className={s.inputi}>
            <textarea
                onChange={onMessgeChange}
                className={s.input}
                ref={newMessageElement}
                value={props.messagesP.newMessage}
            />
            <button className={s.inputButton} onClick={addMessage} >Add post </button>
        </div>
    </div>
    )
}
export default Message;