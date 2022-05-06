import React from "react"
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {changeLookingForJob} from "../../redux/profileReducer";



const Profile = (props) => {


    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                areLookingForJob={props.areLookingForJob}
                changeLookingForJob={props.changeLookingForJob}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;