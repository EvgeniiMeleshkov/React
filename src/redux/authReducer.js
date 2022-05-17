import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";
import message from "../components/Dialogs/Message/Message";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});

export const authThunkCreator = () =>
    async (dispatch) => {
        let response = await authAPI.me();
        let {id, email, login} = response.data;
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
export const login = (email, password, rememberMe, captcha) =>
    async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            // success, get auth data
            dispatch(authThunkCreator())
        } else  {
            if(response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0
                ? response.data.messages[0] : 'Common error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }

    export const getCaptchaUrl = () => async (dispatch) => {
        const response = await securityApi.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }

export const logout = () =>
    async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(dispatch(setAuthUserData(null, null, null, false)))
        }
    }

export default authReducer;