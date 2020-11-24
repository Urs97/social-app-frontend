import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Post from './Post/Post';
import { getPosts } from '../../actions/postsAction';

const Posts = () => {
    const posts = useSelector((state) => state.postsState.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        !posts.length >= 1 ? 'There are currently no posts' : (
            posts.map(post => <Post key={post._id} post={post} />)
        )
    );  
};

export default Posts;