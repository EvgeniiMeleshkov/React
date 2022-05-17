import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utilits/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    type={'password'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={'rememberMe'}
                    component={Input}
                /> remember me
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <Field
                placeholder={'Symbols from image'}
                name={'captcha'}
                component={Input}
                validate={[required]}
            />}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login}) (Login);