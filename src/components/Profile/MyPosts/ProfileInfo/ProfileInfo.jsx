import React, {useState} from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = React.memo(props => {
    if (!props.profile) {
        return <Preloader/>
    }
    //useHooks!!!
    const changeJ = () => {
        props.changeLookingForJob(!props.areLookingForJob)
    }

    return (
        <div>
            <div>
                <img
                    src='data:image/png;base64,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'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <div>Name: {props.profile.fullName}</div>
                <div>About me: {props.profile.aboutMe} </div>
                <div onDoubleClick={changeJ}>{props.areLookingForJob ? '🙋🏼‍♂️' : '🙅🏼‍♂️' }</div>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
})

export default ProfileInfo;