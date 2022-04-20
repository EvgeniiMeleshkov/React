import React from "react"
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



class MyPostsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddPost = () => {
        this.props.addPost();
    };

    onPostChange = (e) => {
        let text = e.target.value;
        this.props.updateNewPostText(text)
    };


    render() {
        return (
           <MyPosts onPostChange={this.onPostChange}
                    newPostText={this.props.newPostText}
                    posts={this.props.posts}
                    onAddPost={this.onAddPost}
           />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)