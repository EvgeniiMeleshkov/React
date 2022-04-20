import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <div>
                        <textarea onChange={props.onPostChange}
                                  value={props.newPostText}/>
                        </div>
                        <div>
                            <button onClick={props.onAddPost}>Add post</button>
                        </div>
                    </div>
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


export default MyPosts;