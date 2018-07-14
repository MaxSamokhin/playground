import ProfileView from '../../pages/Profile/Profile';
import * as RoutesMap from '../RoutesMap/RoutesMap';
import SignInView from '../../pages/Login/Login';
import NewsView from '../../pages/NewsPage/NewsPage';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';

export const route = [
    {
        path: RoutesMap.HOME,
        isExact: true,
        component: Home,
        isPrivate: false,
        redirectPath: null
    },
    {
        path: RoutesMap.LOGIN,
        isExact: false,
        component: SignInView,
        isPrivate: false,
        redirectPath: null
    },
    {
        path: RoutesMap.NEWS,
        isExact: false,
        component: NewsView,
        isPrivate: false,
        redirectPath: null
    },
    {
        path: RoutesMap.LOGIN,
        isExact: false,
        component: SignInView,
        isPrivate: false,
        redirectPath: null
    },
    {
        path: RoutesMap.PROFILE,
        isExact: false,
        component: ProfileView,
        isPrivate: true,
        redirectPath: RoutesMap.LOGIN
    },
    {
        path: null,
        component: NotFound,
        isExact: false,
        isPrivate: false,
        redirectPath: null
    }
];
