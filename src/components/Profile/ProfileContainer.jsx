import React from "react"
import Profile from "./Profile";
import {getStatus, profileMatchThunkCreator, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 7402;
        }
        this.props.profileMatchThunkCreator(userId)
        this.props.getStatus(userId)
    }

    render() {
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
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps,
        {
            setUserProfile,
            profileMatchThunkCreator,
            getStatus,
            updateStatus
        }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)