import message from "../components/Dialogs/Message/Message";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valery'},
        {id: 7, name: 'SomeBody'}
    ],
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How Are You?'},
        {id: 3, message: 'Its a good day to learn React!'},
        {id: 4, message: 'Lets become a programmers'},
        {id: 5, message: 'This is just a message'},
        {id: 6, message: 'Something in this message its just a text'},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let bodyMessage = {
                id: 7,
                message: state.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, bodyMessage],
                newMessageBody: ''
            };
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.bodyMessage
            };
        }
        default:
            return state;
    }
}

export let sendMessageCreator = () => ({type: SEND_MESSAGE});
export let updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, bodyMessage: body});

export default dialogsReducer;