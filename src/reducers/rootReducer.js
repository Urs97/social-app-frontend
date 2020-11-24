import { combineReducers } from 'redux';

import postsReducer from './postsReducer';

const rootReducer = combineReducers({ 
    postsState: postsReducer,
});

export default rootReducer;