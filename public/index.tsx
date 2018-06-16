import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as RoutesMap from './service/RoutesMap/RoutesMap';

import './media/css/main.scss';

import {Provider} from 'react-redux';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom';

import BaseView from './containers/BaseView/BaseView';
import Home from './containers/Home/Home';
import SignIn from './containers/SignIn/SignIn';

import Store from './store/Store';

const App = () => (
    <Provider store={Store}>
        <BrowserRouter>

            <BaseView>
                <Switch>
                    <Route exact path={ RoutesMap.HOME } component={Home}/>
                    <Route path={ RoutesMap.SIGNIN } component={SignIn}/>
                </Switch>
            </BaseView>

        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
