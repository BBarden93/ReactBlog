import React from 'react'
import SinglePost from './SinglePost.js'

const postData = [
    {title: "Hello World", body: "My first post", _id:123},
    {title: "Hola Mundo", body: "El segundo", _id:456},
    {title: "Bonjour monde", body: "Trois", _id:789}
]

const PostsContainer = () => {
    return (
        <div className="PostsContainer">
            {postData.map((postObj) => {
                return <SinglePost post={postObj} key={postObj._id}/>
            })}
        </div>
    )
}

export default PostsContainer