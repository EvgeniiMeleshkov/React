import React from "react";
import s from './ProfileInfo.module.css'
import {Field, reduxForm} from "redux-form";
import { Input, Textarea } from "../../../common/FormsControls/FormsControls";
import styles from "../../../common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <b>Full Name: </b> <Field
                placeholder={'Full Name'}
                name={'fullName'}
                component={Input}
            />
            </div>
            <div>
                <b>Looking for a job: </b> <Field
                type={"checkbox"}
                name={'lookingForAJob'}
                component={Input}
            />
            </div>
            <div>
                <b>My professional skills:</b> <Field
                placeholder={'My professional skills...'}
                name={'lookingForAJobDescription'}
                component={Textarea}
            />
            </div>
            <div>
                <b>About me: </b> <Field
                placeholder={'About me...'}
                name={'aboutMe'}
                component={Textarea}
            />
            </div>
            <div>
                <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: </b> <Field
                    placeholder={key}
                    name={"contacts." + key.toLocaleLowerCase()}
                    component={Input}
                />
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm