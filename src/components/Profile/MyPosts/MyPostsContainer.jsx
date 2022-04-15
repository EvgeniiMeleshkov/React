import React from "react"
import {addPostCreater, updateNewPostTextCreater} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    //let state = props.store.getState();



    return (
        <StoreContext.Consumer>
            {(store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostCreater());
            };

            let onPostChange = (e) => {
                let text = e.target.value;
                store.dispatch(updateNewPostTextCreater(text));
            };

            return(
            <MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
            />
            )
        }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;