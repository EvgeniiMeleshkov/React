import React from "react"
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://totsystems.ru/assets/img/logo.svg'></img>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login :
                <NavLink to={'/login'} activeClassName={s.active}>Login</NavLink>
                }
            </div>

        </header>
    )
}

export default Header;