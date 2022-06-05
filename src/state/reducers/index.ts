import { combineReducers } from 'redux';
import pageReducer from './PageReducers';
import userReducer from './userReducers';
const reducers = combineReducers({
  page: pageReducer,
  user: userReducer,
});

export default reducers;
