import {combineReducers} from 'redux';
import loginState from './containers/Login/Login.reducers';
import newsState from './containers/NewsPage/News.reducers';
import profileState from './containers/Profile/Profile.reducers';

const reducer = combineReducers({
    loginState,
    newsState,
    profileState
});

export default reducer;
