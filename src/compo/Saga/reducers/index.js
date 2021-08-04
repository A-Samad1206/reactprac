import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import imagesReducer from './imagesReducer';
import { combineReducers } from 'redux';
const root = combineReducers({
  isloading: loadingReducer,
  error: errorReducer,
  image: imagesReducer,
});

export default root;
