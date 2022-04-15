import React from "react";
import {sendMessageCreater, updateNewMessageBodyCreater} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

            let state = store.getState()

            let onSendMessage = () => {
                store.dispatch(sendMessageCreater())
            }
            let updateNewMessageBody = (body) => {
                store.dispatch(updateNewMessageBodyCreater(body));
            }
            return (
                <Dialogs
                    updateNewMessageBody={updateNewMessageBody}
                    SendMessage={onSendMessage}
                    newMessageBody={state.dialogsPage.newMessageBody}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                />
            )
        }}
        </StoreContext.Consumer>)
}

export default DialogsContainer