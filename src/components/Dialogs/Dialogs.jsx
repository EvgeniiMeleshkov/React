import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)}
                </div>
                <div className={s.messages}>
                    <div>{props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)}</div>
                </div>
                <div>
                <textarea placeholder='Enter your message here...'
                          onChange={props.onNewMessageChange}
                          value={props.dialogsPage.newMessageBody}/>
                </div>
                <div className={s.button}>
                    <button onClick={props.onSendMessageClick}>Send</button>
                </div>
            </div>
        )
    }



export default Dialogs