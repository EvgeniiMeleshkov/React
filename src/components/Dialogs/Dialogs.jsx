import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'}
                       name={'newMessageBody'}
                       placeholder={'Enter your message here...'}/>
            </div>
            <div className={s.button}>
                <button>Send</button>
            </div>
        </form>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)}
            </div>
            <div className={s.messages}>
                <div>{props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)}</div>
            </div>
            <AddMessageReduxForm onSubmit={props.addNewMessage}/>
        </div>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs