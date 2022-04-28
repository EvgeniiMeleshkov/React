import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL : 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b90981b6-0be4-4b58-8075-1709345cb348"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=
            ${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            });
    },
    onUserFollow(userId) {
        return instance.post(`follow/${userId}`, {},).then(response => {
            return response.data.resultCode
        });
    },
    onUserUnfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode
        });
    }
}

