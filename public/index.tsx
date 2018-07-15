import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './media/css/main.scss';

import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {routes} from './routes';
import store from './store/Store';

const App = () => (
    <Provider store={store}>
        <BrowserRouter children={routes}/>
    </Provider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
