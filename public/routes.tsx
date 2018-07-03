import * as React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import NewsView from './containers/NewsView/NewsView';
import ProfileView from './containers/ProfileView/Profile';
import HomeView from './containers/HomeView/HomeView';
import SignInView from './containers/LoginView/LoginView';
import BaseView from './containers/BaseView/BaseView';
import NotFoundView from './containers/NotFoundView/NotFoundView';

import * as RoutesMap from './service/RoutesMap/RoutesMap';

const route = [
    {
        path: RoutesMap.HOME,
        isExact: true,
        component: HomeView
    },
    {
        path: RoutesMap.LOGIN,
        isExact: false,
        component: SignInView
    },
    {
        path: RoutesMap.NEWS,
        isExact: false,
        component: NewsView
    },
    {
        path: RoutesMap.LOGIN,
        isExact: false,
        component: SignInView
    },
    {
        path: RoutesMap.PROFILE,
        isExact: false,
        component: ProfileView
    },
    {
        path: null,
        component: NotFoundView,
        isExact: false
    }
];

export const routes = <BaseView>
    <Switch>
        {
            route.map(({path, component, isExact}, key) => {
                return <Route
                    exact={isExact}
                    path={path}
                    component={component}
                    key={key}
                />;
            })
        }
    </Switch>
</BaseView>;
