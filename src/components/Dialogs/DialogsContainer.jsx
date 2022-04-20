import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

class DialogsContainer extends React.Component {
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
            <Dialogs
                dialogsPage={this.props.dialogsPage}
                onNewMessageChange={this.onNewMessageChange}
                onSendMessageClick={this.onSendMessageClick}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        SendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);