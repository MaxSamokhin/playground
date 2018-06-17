import * as React from 'react';
import News from './containers/News/News';
import * as RoutesMap from './service/RoutesMap/RoutesMap';
import Profile from './containers/Profile/Profile';
import Home from './containers/Home/Home';
import SignIn from './containers/Login/Login';
import List from './containers/List/List';
import BaseView from './containers/BaseView/BaseView';

import {Route, BrowserRouter, Switch} from 'react-router-dom';

export const routes = <BaseView>
    <Switch>
        <Route exact path={ RoutesMap.HOME } component={Home}/>
        <Route path={ RoutesMap.LOGIN } component={SignIn}/>
        <Route path={ RoutesMap.NEWS } component={News}/>
        <Route path={ RoutesMap.PROFILE } component={Profile}/>
        <Route path={ RoutesMap.LIST } component={List}/>
    </Switch>
</BaseView>;
