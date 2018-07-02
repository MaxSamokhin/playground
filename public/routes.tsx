import * as React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import Home from './containers/Home/Home';
import SignIn from './containers/Login/Login';
import BaseView from './containers/BaseView/BaseView';
import NotFound from './containers/NotFound/NotFound';

import * as RoutesMap from './service/RoutesMap/RoutesMap';

export const routes = <BaseView>
    <Switch>
        <Route exact path={ RoutesMap.HOME } component={Home}/>
        <Route path={ RoutesMap.LOGIN } component={SignIn}/>
        <Route path={ RoutesMap.NEWS } component={News}/>
        <Route path={ RoutesMap.PROFILE } component={Profile}/>
        <Route component={NotFound}/>
    </Switch>
</BaseView>;
