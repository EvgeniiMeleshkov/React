import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import News from './components/Navbar/Navbar'
import Music from './components/Navbar/Navbar'
import Settings from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {addMessage, addPost} from "./state";


const App = (props) => {


    /*  let arr = props.dialogs.map(a => <Dialogs id = {a.id} name={a.name}/>)*/

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state.sidebarPage}/>

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*'
                           element={<Dialogs

                               state={props.state.dialogsPage}
                               newMessageText={props.state.dialogsPage.newMessageText}
                               addMessage={addMessage}
                               updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path='/profile'
                           element={<Profile
                               profilePage={props.state.profilePage}
                               addPost={addPost}
                               updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
