import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Base from './pages/Base/Base';
import PrivateRouter from './components/PrivateRouter/PrivateRouter';
import {route} from './constants/RoutesConfig/RoutesConfig';

export const routes = <Base>
    <Switch>
        {
            route.map(({path, component, isExact, isPrivate, redirectPath}, index) => {
                return isPrivate ?
                    <PrivateRouter
                        component={component}
                        redirectPath={redirectPath}
                        exact={isExact}
                        path={path}
                        key={index}
                    /> :
                    <Route
                        exact={isExact}
                        path={path}
                        component={component}
                        key={index}
                    />;
            })
        }
    </Switch>
</Base>;
