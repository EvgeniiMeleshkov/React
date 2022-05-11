import React from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

import userPhoto from "../../../../assets/images/computer-user-icon-2.png";


const ProfileInfo = React.memo((props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    //useHooks!!!
    const changeJ = () => {
        props.changeLookingForJob(props.profile.lookingForAJob)
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div>

            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <div>
                <b>Name: {props.profile.fullName}</b>
                </div>
                <div>
                <b>About me: {props.profile.aboutMe} </b>
                </div>
                <div>
                <b onDoubleClick={changeJ}>{props.profile.lookingForAJob ? '🙋🏼‍♂️' : '🙅🏼‍♂️'}</b>
                </div>

                    <div>{props.profile.lookingForAJobDescription}</div>

            </div>
        </div>
    )
})

export default ProfileInfo;