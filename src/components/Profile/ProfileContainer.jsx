import React from "react"
import Profile from "./Profile";
import {
    addNewLike,
    deletePost,
    getStatus,
    profileMatchThunkCreator,
    setUserProfile,
    updateStatus
} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {


    componentDidMount() {

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

    render() {
        if(!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
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
            addNewLike
        }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)