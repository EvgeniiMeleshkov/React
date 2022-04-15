import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostCreater, updateNewPostTextCreater} from "../../../redux/profileReducer";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post postMessage={p.message} likesCount={p.likesCount}/>)


    let addPost = () => {
        props.dispatch(addPostCreater());
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextCreater(text));
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;