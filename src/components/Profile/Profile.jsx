import React from "react"
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     profilePage={props.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;