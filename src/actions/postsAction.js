import { ACTIONS } from '../constants/actionTypes';

import * as api from '../api/postsApi';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: ACTIONS.GET_ALL_POSTS, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: ACTIONS.CREATE_POST, payload: data });
    
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: ACTIONS.UPDATE_POST, payload: data });
    
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: ACTIONS.LIKE_POST, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const dislikePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.dislikePost(id);

    dispatch({ type: ACTIONS.DISLIKE_POST, payload: data });

  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: ACTIONS.DELETE_POST, payload: id });

  } catch (error) {
    console.log(error);
  }
};

export const setCurrentPost = (id) => async (dispatch) => {
  dispatch({ type: ACTIONS.SET_CURRENT_POST, payload: id});
}