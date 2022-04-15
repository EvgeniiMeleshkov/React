import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It`s my first post', likesCount: 19}
            ],
            newPostText: "it-Kamasutra.com"
        },
        dialogsPage: {
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
        },
        sidebarPage: {
            sidebar: [
                {id: 1, name: 'Masha'},
                {id: 2, name: 'Marik'},
                {id: 4, name: 'Jenya'},
                {id: 5, name: 'Alla'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },


    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    }
};



