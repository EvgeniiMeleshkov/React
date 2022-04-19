import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import News from './components/Navbar/Navbar'
import Music from './components/Navbar/Navbar'
import Settings from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";




const App = () => {
    /*  let arr = props.dialogs.map(a => <Dialogs id = {a.id} name={a.name}/>)*/

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar />

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer />}/>
                    <Route path='/profile'
                           element={<Profile />}/>
                    <Route path='/news'
                           element={<News/>}/>
                    <Route path='/music'
                           element={<Music/>}/>
                    <Route path='/settings'
                           element={<Settings/>}/>
                    <Route path='/users'
                           element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
