import {createSelector} from "reselect";

const getUsersSimpleSelector = (state) => {
    return state.usersPage.users
}


export const getUsersSelector = createSelector(getUsersSimpleSelector,
    (users) => {
    return users.filter(u => true)
})

export const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
}

