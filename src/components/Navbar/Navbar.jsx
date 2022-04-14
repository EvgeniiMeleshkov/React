import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Sidebar from "./Sitebar/Sidebar";





const Navbar = (props) => {

    const st = () => {
        return (
            select => select.isActive ? s.active : s.item
        )
    }

    return (
        <nav className={s.nav}>
            <div>
                <div className={s.item}>
                    <NavLink to='/profile' className={st()}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' className={st()}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news'>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='music'>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='settings'>Settings</NavLink>
                </div>
                <div className={s.item}>
                    <Sidebar state={props.state.sidebarPage}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;