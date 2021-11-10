import React from 'react';
import s from './Message.module.scss';
import Dialog from './Dialog/Dialog';
import Messagess from './Messagess/Messagess';
const Message = (props) => {
    let newMessageElement = React.createRef();

    let onMessgeChange = () => {
        let text = newMessageElement.current.value;
        props.onMessgeChange(text);
    }



    return (<div>
        <div className={s.Messages}>

            <div className={s.dialogs}>
                <div className={s.dialog_item}>
                    {props.dialogsElement.map(d => <Dialog name={d.name} id={d.id} />)}
                </div>
            </div>
            <div className={s.message}>
                {props.messagesElement.map(m => <Messagess message={m.message} id={m.id} />)}
            </div>
        </div>

        <div className={s.inputi}>
            <textarea
                onChange={onMessgeChange}
                className={s.input}
                ref={newMessageElement}
                value={props.messagesP.newMessage}
            />
            <button className={s.inputButton} onClick={props.addMessage} >Add post </button>

        </div>
    </div>
    )
}
export default Message;