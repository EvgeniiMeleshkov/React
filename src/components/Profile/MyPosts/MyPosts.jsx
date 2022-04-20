import React from "react"
import s from './MyPosts.module.css'
import Post from "./Post/Post";


class MyPosts extends React.Component {
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
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <div>
                        <textarea onChange={this.onPostChange}
                                  value={this.props.newPostText}/>
                        </div>
                        <div>
                            <button onClick={this.onAddPost}>Add post</button>
                        </div>
                    </div>
                </div>
                <div className={s.posts}>
                    {this.props.posts
                        .map(p => <Post postMessage={p.message}
                                        key={p.id}
                                        likesCount={p.likesCount}/>)}
                </div>
            </div>
        )
    }
}

export default MyPosts;