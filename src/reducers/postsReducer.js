import { ACTIONS } from '../constants/actionTypes';

const initialState = {
    posts: [],
    currentPost: null
};

const getAllPosts = (fetchedPosts, postsState) => {
    return {...postsState, posts: fetchedPosts};
}

const createPost = (newPost, postsState) => {
    const updatedPosts = [...postsState.posts, newPost];
    return {...postsState, posts: updatedPosts, currentPost: null};
}

const updatePost = (updatedPost, postsState) => {
    const posts = postsState.posts;
    const updatedPosts = posts.map(post => (post._id === updatedPost._id ? updatedPost : post));
    return {...postsState, posts: updatedPosts, currentPost: null};
}

const deletePost = (id, postsState) => {
    const posts = postsState.posts;
    const updatedPosts = posts.filter(post => post._id !== id);
    return {...postsState, posts: updatedPosts, currentPost: null};
}

const setCurrentPost = (id, postsState) => {
    if (id === postsState.currentPost) return {...postsState, currentPost: null};
    return {...postsState, currentPost: id};
}

const postsReducer = (postsState = initialState, action) => {
    switch (action.type) {
        case ACTIONS.GET_ALL_POSTS:
            return getAllPosts(action.payload, postsState);
        case ACTIONS.CREATE_POST:
            return createPost(action.payload, postsState);
        case ACTIONS.UPDATE_POST:
        case ACTIONS.LIKE_POST: 
        case ACTIONS.DISLIKE_POST:
            return updatePost(action.payload, postsState);
        case ACTIONS.DELETE_POST:
            return deletePost(action.payload, postsState);
        case ACTIONS.SET_CURRENT_POST:
            return setCurrentPost(action.payload, postsState);
        default:
            return postsState;
    }
};

export default postsReducer;