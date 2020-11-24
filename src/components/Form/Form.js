import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createPost, updatePost } from '../../actions/postsAction';

const Form = () => {

    const [postData, setPostData] = useState({title: '', author: '', content: ''});
    const currentPost = useSelector((state) => state.postsState.currentPost);
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentPost) {
            dispatch(updatePost(currentPost, postData));
            clear();
        } 
        else {
            dispatch(createPost(postData));
            clear();
        }
    };

    const clear = () => {
        setPostData({title: '', author: '', content: ''});
    };

    return (
        <section>
            <h1>{currentPost ? 'Editing Post' : 'Create New Post'}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" value={postData.author} onChange={(e) => setPostData({ ...postData, author: e.target.value })} />
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" rows="5" value={postData.content} onChange={(e) => setPostData({ ...postData, content: e.target.value })}/>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Form;
