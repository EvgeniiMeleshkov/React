const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    messages: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How Are You?'},
        {id: 3, message: ';alkjfd  ajf jad e3 3'},
        {id: 4, message: ' nalknalkjwa   LKJ  JEF '},
        {id: 5, message: '22 4 1 5 5 11 23 3'},
        {id: 6, message: '2 IOUH  hh  ihu  ouh H OH jjJJ'},
    ],
    newMessageBody: "",
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valery'},
        {id: 7, name: 'SomeBody'}]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export let sendMessageCreater = () => ({type: SEND_MESSAGE});
export let updateNewMessageBodyCreater = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;