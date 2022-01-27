import formVisibleReducer from './form-visible-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

let store = createStore(rootReducer);

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainPostList: postListReducer
});

export default rootReducer;