import React from "react";
import {sendMessageCreator} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    addNewMessage = (values) => {
        this.props.SendMessage(values.newMessageBody)
    }

    render() {


        if (!this.props.isAuth) return <Redirect to={'/login'}/>


        return (
            <Dialogs
                dialogsPage={this.props.dialogsPage}
                onNewMessageChange={this.onNewMessageChange}
                onSendMessageClick={this.onSendMessageClick}
                addNewMessage={this.addNewMessage}
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
        SendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer);