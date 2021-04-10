import React from 'react';
import { useDispatch } from 'react-redux';

import { likePost, dislikePost, deletePost, setCurrentPost } from '../../../actions/postsAction';

const Post = ({ post }) => {
    const dispatch = useDispatch();
    const date = post.createdAt.split('T')[0];
    
    return (
        <section>
            <h1>{post.title}</h1>
            <h3>{post.author}</h3>
            <h3>{date}</h3>
            <p>{post.content}</p>
            <span>{post.likeCount}</span>
            <span>{post.dislikeCount}</span>
            <button onClick={() => dispatch(likePost(post._id))}>Like</button>
            <button onClick={() => dispatch(dislikePost(post._id))}>Dislike</button>
            <button onClick={() => dispatch(deletePost(post._id))}>Delete</button>
            <button onClick={() => dispatch(setCurrentPost(post._id))}>Edit</button>
        </section>
    )
}

export default Post;
