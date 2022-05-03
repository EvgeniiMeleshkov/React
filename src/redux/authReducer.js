import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const authThunkCreator = () => {
    return (dispatch) => {
       return  authAPI.authentication().then(response => {
            let {id, email, login} = response.data;
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
               dispatch(authThunkCreator())
            } else {
                let message = response.data.messages.length > 0
                    ? response.data.messages[0] : 'Common error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
               dispatch(dispatch(setAuthUserData(null, null, null, false)))
            }
        })
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}});

export default authReducer;