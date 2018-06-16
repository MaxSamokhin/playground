import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RoutesMap from './service/RoutesMap/RoutesMap';

import './media/css/main.scss';

import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import BaseView from './containers/BaseView/BaseView';
import Home from './containers/Home/Home';
import SignIn from './containers/Login/Login';
import News from './containers/News/News';
import Profile from './containers/Profile/Profile';
import List from './containers/List/List';

import Store from './store/Store';

const App = () => (
    <Provider store={Store}>
        <BrowserRouter>

            <BaseView>

                <Switch>
                    <Route path={ RoutesMap.HOME } component={Home}/>
                    <Route path={ RoutesMap.LOGIN } component={SignIn}/>
                    <Route path={ RoutesMap.NEWS } component={News}/>
                    <Route path={ RoutesMap.PROFILE } component={Profile}/>
                    <Route path={ RoutesMap.LIST } component={List}/>
                </Switch>
            </BaseView>

        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
