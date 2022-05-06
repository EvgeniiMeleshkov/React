import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
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
    },

}

export const authAPI = {
    authentication() {
        return instance.get(`auth/me`).then(responce => {
            return responce.data
        })
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    setJob(areLookingForJob) {

        return instance.put(`profile`, {
            "aboutMe": "Just a good boy",
                "contacts": {
                facebook: "facebook.com",
                    github: "github.com",
                    instagram: "instagra.com/sds",
                    mainLink: null,
                    twitter: "https://twitter.com/@sdf",
                    vk: "vk.com/",
                    website: null,
                    youtube: null
            },
            "lookingForAJob": areLookingForJob,
                "lookingForAJobDescription": 'Anyway, yes!',
                "fullName": "John MJ"
        })

    }

}

