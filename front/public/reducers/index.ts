import {combineReducers} from 'redux';
import userState from './User/User.reducers';
import newsState from './News/News.reducers';

const reducer = combineReducers({
    userState,
    newsState
});

export default reducer;
