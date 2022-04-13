import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {



    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to = {String(props.id)} > { props.name }  <img className={s.img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KGRjFy87J9t4bCpOmz2ukXutLOlTP-5I3A&usqp=CAU' alt='description'/> </NavLink>


        </div>
    )
}

export default DialogItem