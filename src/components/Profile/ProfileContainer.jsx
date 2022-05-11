import React from "react"
import Profile from "./Profile";
import {
    addNewLike, changeLookingForJob,
    deletePost,
    getStatus,
    profileMatchThunkCreator, savePhoto,
    setUserProfile,
    updateStatus
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileMatchThunkCreator(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         areLookingForJob={this.props.areLookingForJob}
                         changeLookingForJob={this.props.changeLookingForJob}
                         savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    areLookingForJob: state.profilePage.areLookingForJob,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authorisedUserId: state.auth.userId,
})

export default compose(
    connect(mapStateToProps,
        {
            setUserProfile,
            profileMatchThunkCreator,
            getStatus,
            updateStatus,
            deletePost,
            addNewLike,
            changeLookingForJob,
            savePhoto
        }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)