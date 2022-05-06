import {usersAPI} from "../api/api";
import {updateObjInArray} from "../utilits/objHelpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userID, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userID, "id", {followed: false})
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID});
export const unFollowSuccess = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID
});


export const getUsersThunkCreator = (page, pageSize) => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}


const followUnfollowFlow = async (dispatch, userID, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userID))
    let resultCode = await apiMethod(userID);
    if (resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}


export const follow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userID, usersAPI.onUserFollow.bind(userID), followSuccess)
    }
}
export const unFollow = (userID) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userID, usersAPI.onUserUnfollow.bind(userID), unFollowSuccess)
    }
}

export default usersReducer;