import {combineReducers} from 'redux';
import userState from './User/User.reducers';
import newsState from './News/News.reducers';
import profileState from './Profile/Profile.reducers';

const reducer = combineReducers({
    userState,
    newsState,
    profileState
});

export default reducer;
