import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message}/>);

    let newMessage = React.createRef();

    let addMessage = () => {
        props.addMessage()
    }
    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onMessageChange}
                          ref={newMessage}
                          value={props.newMessageText}
                ></textarea>
            </div>
            <div className={s.button}>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs