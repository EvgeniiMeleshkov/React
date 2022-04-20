import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

class Dialogs extends React.Component {
    constructor(props) {
        super(props);
    }

    onSendMessageClick = () => {
        this.props.SendMessage()
    };
    onNewMessageChange = (e) => {
        let body = e.target.value;
        this.props.updateNewMessageBody(body)
    };

    render() {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {this.props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}/>)}
                </div>
                <div className={s.messages}>
                    <div>{this.props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)}</div>
                </div>
                <div>
                <textarea placeholder='Enter your message here...'
                          onChange={this.onNewMessageChange}
                          value={this.props.dialogsPage.newMessageBody}/>
                </div>
                <div className={s.button}>
                    <button onClick={this.onSendMessageClick}>Send</button>
                </div>
            </div>
        )
    }
}


export default Dialogs