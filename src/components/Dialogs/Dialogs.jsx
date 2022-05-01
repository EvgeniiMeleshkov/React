import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";

const maxLength300 = maxLengthCreator(300)

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageBody'}
                    placeholder={'Enter your message here...'}
                    validate={[required, maxLength300]}
                />
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