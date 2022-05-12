import React, {useState} from "react"
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/computer-user-icon-2.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, savePhoto, updateStatus, status, isOwner, saveProfile}) => {
    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>

            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />

                { editMode ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    :  <ProfileData profile={profile} isOwner={isOwner}
                                    goToEditMode={() => {setEditMode(true)}}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Name: </b> {profile.fullName}
        </div>
        <div>
            <b>About me: </b> {profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job: </b> { profile.lookingForAJob ? 'Yes!' : 'No'}
        </div>
        <div>
            { profile.lookingForAJob &&
                <div>{ profile.lookingForAJobDescription}</div>
            }
        </div>
        <div>
            <b>Contacts: </b> {Object.keys( profile.contacts).map(
            key => {return  <Contact key={key} contactTitle={key}
                                     contactValue={ profile.contacts[key]}/>}) }
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;