import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPostsForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newPostBody'}
                    placeholder={'Enter your post here...'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
            </form>
    )
}

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <MyReduxFormPost onSubmit={props.addNewPostText}/>
            </div>
            <div className={s.posts}>
                {props.posts
                    .map(p => <Post postMessage={p.message}
                                    key={p.id}
                                    likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}

const MyReduxFormPost = reduxForm({
    form: 'profileAddPostForm'
})(MyPostsForm)

export default MyPosts;