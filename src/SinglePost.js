import React from 'react'

const SinglePost = (props) => {
    const post = props.post
    return (
        <div className = "SinglePost">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default SinglePost 
