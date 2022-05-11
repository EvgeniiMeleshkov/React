import {profileAPI} from "../api/api";
import profile from "../components/Profile/Profile";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const ADD_NEW_LIKE = 'ADD_NEW_LIKE';
const ARE_LOOKING_FOR_JOB = 'profileReducer/ARE_LOOKING_FOR_JOB';
const SAVE_PHOTO_SUCCESS = 'profileReducer/SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It`s my first post', likesCount: 19}
    ],

    profile: null,
    status: 'Status',
    areLookingForJob: {...profile.lookingForAJob}
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.newPostBody,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case ADD_NEW_LIKE: {
            return {...state, posts: state.posts.filter(p =>
                    p.id === action.postId ? p.likesCount = p.likesCount + 1 : p)}
        }
        case ARE_LOOKING_FOR_JOB: {
            return {...state, profile: {...state.profile, lookingForAJob: !action.areLookingForJob}}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }
}

export const addPostCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const addNewLike = (postId) => ({type: ADD_NEW_LIKE, postId});
export const toggleJob = (areLookingForJob) => ({type: ARE_LOOKING_FOR_JOB, areLookingForJob});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});


export const profileMatchThunkCreator = (userId) => async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
            dispatch(setUserProfile(data))
}
export const changeLookingForJob = (areLookingForJob) => async (dispatch) => {
    let response = await profileAPI.setJob(areLookingForJob)
    if(response.data.resultCode === 0)
        dispatch(toggleJob(areLookingForJob))

}
export const getStatus = (userId) => async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
            dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}
export const savePhoto = (file) => async (dispatch) => {
        let response = await profileAPI.savePhoto(file);
            if(response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos))
            }
}



export default profileReducer;