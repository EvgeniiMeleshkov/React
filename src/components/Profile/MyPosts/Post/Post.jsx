import React from "react"
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEWTaMjIzoQeuBAsIeOia_1Wi4mCJrKX_YQ&usqp=CAU" />
                { props.postMessage }
                <div>
                    <span>{ props.likesCount }</span>
                </div>
            </div>
    )
}

export default Post;