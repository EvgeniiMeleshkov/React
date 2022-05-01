import {authAPI} from "../api/api";

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
        authAPI.authentication().then(data => {
            let {id, email, login} = data.data;
            if (data.resultCode === 0) {
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