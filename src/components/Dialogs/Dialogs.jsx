import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/dialogsReducer"


const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message}/>);


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreater())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreater(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <div>
                <textarea placeholder='Enter your message here...'
                    onChange={onNewMessageChange}
                          value={props.dialogsPage.newMessageBody}
                ></textarea>
            </div>
            <div className={s.button}>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs