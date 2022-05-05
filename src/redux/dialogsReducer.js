const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let bodyMessage = {
                id: state.messages.length + 1,
                message: action.newMessageBody
            };
            return {
                ...state,
                messages: [...state.messages, bodyMessage],
            };
        }

        default:
            return state;
    }
}

export let sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;