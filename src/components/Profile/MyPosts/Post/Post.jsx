import React from "react"
import s from './Post.module.css'



const Post = (props) => {

    let deletePost = () => {
        props.delete(props.id)
    }
    let likePost = () => {
        props.like(props.id)
    }
    return (
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEWTaMjIzoQeuBAsIeOia_1Wi4mCJrKX_YQ&usqp=CAU" />
                { props.postMessage }
                <div>
                    <div>
                        <button onClick={likePost}>Like</button>
                    </div>
                    <div>{ props.likesCount }</div>
                    <div>
                        <button onClick={deletePost}>Delete</button>
                    </div>
                </div>
            </div>
    )
}

export default Post;