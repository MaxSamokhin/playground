import {combineReducers} from 'redux';
import loginState from './pages/Login/Login.reducers';
import newsState from './pages/NewsPage/News.reducers';
import profileState from './pages/Profile/Profile.reducers';

const reducer = combineReducers({
    loginState,
    newsState,
    profileState
});

export default reducer;
