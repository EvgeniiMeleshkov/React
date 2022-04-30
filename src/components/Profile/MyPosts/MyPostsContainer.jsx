import React from "react"
import {addPostCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



class MyPostsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    addNewPostText = (values) => {
        this.props.addPost(values.newPostBody)
    }

    render() {
        return (
           <MyPosts
                    newPostText={this.props.newPostText}
                    posts={this.props.posts}
                    addNewPostText={this.addNewPostText}
           />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostCreator(newPostBody));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)