let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {

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
        newMessageText: "Its new message!",
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
    },
};

window.state = state

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

//--------------------------------------------------------------


export const addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};


export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;